const express = require('express');
const app = express();
const users = [
  { id: 1, name: 'Urian Viera' },
  { id: 2, name: 'Brenda Viera' },
];

const PORT = 3000;

app.use(express.json()); // Middleware para parsear JSON

app.get('/', (req, res) => {
res.send('¡Hola, Mundo!');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/test', (req, res) => {
    res.send("test2")
});

app.post('/users', (req, res) => {
    console.log("post users")
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.delete('/users/:id', (req, res) => {
const userId = parseInt(req.params.id);
const userIndex = users.findIndex(user => user.id === userId);

if (userIndex >= 0) {
  users.splice(userIndex, 1);
  res.status(204).send();
} else {
  res.status(404).json({ message: 'Usuario no encontrado' });
}
});



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});