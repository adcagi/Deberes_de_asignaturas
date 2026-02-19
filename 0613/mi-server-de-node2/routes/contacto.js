const express = require ('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send(`
        <h1>contacto</h1>
        <form method="POST" action="/contacto">
            <input type="text" name="nombre" placeholder="nombre" required />
            <input type="email" name="email" placeholder="email@example.com" required/>
            <input type="text" name="telefono" placeholder="tu telefono" required/>
            <br>
            <button type="submit">Enviar</button>
        </form>
    `);
});

router.post('/', (req, res) =>{
    const {nombre, email, telefono} = req.body;

    console.log('datos recibidos');
    console.log(nombre, email, telefono);

    res.send('mensaje revcibido con exito');
});


module.exports = router;