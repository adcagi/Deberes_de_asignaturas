import 'express-async-errors'
import express, { ErrorRequestHandler } from 'express'
import db from './engine/database'

const app = express()
db.start()

const port = process.env.PORT || 3000
const accessControlAllowOrigin = process.env.ALLOW_ORIGIN || '*'

app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", accessControlAllowOrigin)
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
  next()
})

app.get('/', (req, res) => {
  res.json({ message: "Welcome to API" })
})


app.get('/api/producte', async(req, res) =>{
  const response = await db.query('products').orderBy('product_id', 'asc')
  res.json(response);
})
app.listen(port, () => {
  console.log(`Listening backend at http://localhost:${port}`)
})