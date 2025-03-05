const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let data = { message: "Hello World!" };

app.get('/', (req, res) => {
    res.send(data);
});

app.post('/', (req, res) => {
    data = req.body;
    res.send({ message: "Data updated", data });
});

app.put('/', (req, res) => {
    data = { ...data, ...req.body };
    res.send({ message: "Data replaced", data });
});

app.patch('/', (req, res) => {
    data = { ...data, ...req.body };
    res.send({ message: "Data modified", data });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});