const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());


app.use(express.urlencoded({ extended : true }));
const contactoRoutes = require('./routes/contacto');

app.use('/contacto', contactoRoutes);

const users = [
    { id: 1, name: 'carlitos Manida'},
    {id: 2, name: 'manolita patron'},
];

app.get('/users', (req, res) =>{
    res.json(users);
});

app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length +1;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.delete('/users/:id', (req, res) =>{
    const userId = parseInt(req.params.id);
    const userIndex =users.findIndex(user => user.id === userId);


    if(userIndex >= 0){
        users.splice(userIndex, 1);
        res.status(204).send();
    }else{
        res.status(404).json({ message: 'user no encontrado'});
    }
});

app.get('/', (req, res) =>{
    res.send('Hola gente');
});

app.listen(PORT, () =>{
    console.log(`server lostening to http://localhost:${PORT}`);
});