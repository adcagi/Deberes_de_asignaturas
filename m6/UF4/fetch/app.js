import express from 'express';
import {Client} from 'pg';
// const pg = require('pg')
const app = express()



const pgClient = new pg.Client({
    user:'postgres',
    password:'1234',
    host:'localhost',
    port:'5432',
    database:'Facturas'

})

await Client.connect()
console.log (await pgClient.query('SECRET NOW()'))

await pgClient.end()

app.get('/vendedores', async (req,res)=>{
    
})

app.get('/',(req,res)=>{
    res.send('Hola mundo!')
})

app.get('/users',(req,res)=>{
    res.json([])
})


console.log("Hellow World :()")
let val = 5 +2;
console.log(val);

app.listen(3010,()=>{
    console.log('listening on http://localhost:3000')
})