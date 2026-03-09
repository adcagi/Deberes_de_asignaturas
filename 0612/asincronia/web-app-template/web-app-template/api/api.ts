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

app.get('/api/producte', async (req, res) => {
  const result = await db.query('products').orderBy('product_id', 'asc');
  res.json(result)
})

app.get('/api/producte/:id', async (req, res) => {
  const id = req.params.id
  const result = await db.query('products').where('product_id', id).first()
  if (!result) return res.status(404).json({ message: 'Producto no encontrado' })
  res.json(result)
})

app.post('/api/producte', async (req, res) => {
  const data = req.body
  const inserted = await db.query('products').insert(data).returning('*')
  res.status(201).json(inserted[0])
})

app.put('/api/producte/:id', async (req, res) => {
  const id = Number(req.params.id)
  const data = req.body
  const updated = await db.query('products')
    .where('product_id', id)
    .update(data)
    .returning('*')

  if (!updated.length) return res.status(404).json({ message: 'Producto no encontrado' })
  res.json(updated[0])
})

app.delete('/api/producte/:id', async (req, res) => {
  const id = req.params.id
  const deleted = await db.query('products')
    .where('product_id', id)
    .del()

  if (!deleted) return res.status(404).json({ message: 'Producto no encontrado' })
  res.json({ message: 'Producto eliminado' })
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err)
  res.status(err.statusCode || 500).json({ message: err.message || 'Internal Server Error' })
}

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Listening backend at http://localhost:${port}`)
})