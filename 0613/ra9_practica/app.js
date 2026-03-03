const express = require('express');
const app = express();

app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('API de productos funcionando');
});

module.exports = app;