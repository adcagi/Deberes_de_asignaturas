const {Client} = require('pg')
const express=require('express')

const app = express()
app.use(express.json())

const con=new Client({
    host:"localhost",
    user:"postgres",
    port:"5432",
    password:"admin",
    database:"supermercado"
})

con.connect().then(()=> console.log("conectado"))

app.post('/postData',(req,res)=>{
    const {name,id} = req.body

    const insert_query = 'INSERT INTO demotable (name,id) VALUES ($1, $2)'
    
    con.query(insert_query, [name,id], (err, result)=>{
        if(err){
            res.send(err)
        }else{
            console.log(result)
            res.send("POSTED DATA")
        }
    })
})


app.get('/fetchData',(req,res)=>{
    const fetch_query="SELECT * from demotable"
    con.query(fetch_query,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result.rows)
        }
    })
})

app.get('/fetchbyId/:id',(req,res)=>{
    const id=req.params.id
    const fetch_query="SELECT * from demotable where id=$1"
    con.query(fetch_query,[id],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result.rows[0])
        }
    })
})

app.put('/update/:id',(req,res)=>{
    const id=req.params.id;
    const name=req.body.name;
    const update_query="UPDATE demotable SET name=$1 WHERE id=$2"
    con.query(update_query,[name,id],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send("SUCCESSFULLY UPDATED")
        }
    })
})

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id
    const delete_query='DELETE  from demotable where id=$1'
    con.query(delete_query,[id],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
})


app.patch('/patch/:id', (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    const patch_query = "UPDATE demotable SET name = COALESCE($1, name) WHERE id = $2";
    con.query(patch_query, [name, id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("SUCCESSFULLY PATCHED");
        }
    });
});

app.listen(3000,()=>{
    console.log("el server está funcionando...")
})