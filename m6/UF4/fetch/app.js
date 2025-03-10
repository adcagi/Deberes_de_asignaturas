import express from 'express';
const app = express()

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