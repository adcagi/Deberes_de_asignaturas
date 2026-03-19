const express = require('express');
const cors = require('cors');
const app = express();
const PORT= 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'))



const users =[
    { id: 1, name: 'Adri'},
    { id: 2, name: 'Gabri'},

]

const contactes = [];

const contacte = {
    "id": Number,
    "nom" : String,
    "cognoms" : String,
    "descripcio": String,
    "telefon": Number
}


const coches = [];

const coche = {
    "id": Number,
    "modelo": String,
    "marca" : String
}

app.get('/coches', (req, res) =>{
    res.json(coches)
})


app.post('/coches', (req, res) =>{
    const  {modelo, marca} = req.body;
    if(!modelo || !marca){
        return res.status(400).json({message: 'faltan datos'})
    }

    const newCoche = {
        id: coches.length > 0 ? coches[coches.length -1].id +1 : 1,
        modelo,
        marca
    }
    coches.push(newCoche);
    res.status(201).json(newCoche);
})

app.delete('/coches/:id', (req, res) =>{
    const cocheId = parseInt(req.params.id);
    const cocheIndex = coches.findIndex(coche => coche.id === cocheId );

    if(cocheIndex >= 0){
        coches.splice(cocheIndex, 1);
        res.status(204).send();

    }else{
        res.status(404).json({message:'car not found'})
    }
})

app.get("/contactes", (req, res) =>{
    res.json(contactes)
})


app.get('/users', (req,res) =>{
    res.json(users);
})

app.post("/contactes", (req, res) =>{
    const {nom, cognoms, telefon, descripcio} = req.body;

    if(!nom || !cognoms){
        return res.status(400).json({message: 'faltan campos'});

    }

    const newContacte = {
        id: contactes.length > 0 ? contactes[contactes.length - 1].id + 1 : 1,
        nom,
        cognoms,
        descripcio,
        telefon
    }


    contactes.push(newContacte);
    res.status(201).json(newContacte);

})

app.delete("/contactes/:id", (req, res) =>{
    const contacteId = parseInt(req.params.id);
    const contacteIndex = contactes.findIndex(contacte => contacte.id === contacteId);

    if(contacteIndex >= 0){
        contactes.splice(contacteIndex, 1);
        res.status(204).send();
    }else{
        res.status(404).json({message:' contacte not found'});
    }
})

app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});


app.delete('/users/:id', (req, res) =>{
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if(userIndex >= 0){
        users.splice(userIndex, 1);
        res.status(204).send();
    } else{
        res.status(404).json({message: 'user not found'});
    }
})

app.listen(PORT, () =>{
    console.log(`server escuchando en http://localhost:${PORT}`);
})