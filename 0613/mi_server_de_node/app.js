const express = require ('express');
const app = express();

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) =>{

  res.render('index.ejs', {
    title: 'Hola mundo!', 
    message: 'esto es un mensaje'
  });

});

app.get('/contacte', (req, res) =>{
    res.render('contacte', {
      title: 'contacte'
    });
  });


app.post('/contacte', (req, res) =>{
  const {telefon, nom, cognom, descipcio} = req.body;
  if(!/^\d{9}$/.test(telefon)){
    return res.send("El telefono debe tener 9 digitos")  
  }
   res.send(`Formulario recibido <br>
    Nom = ${nom}<br>
    Cognom = ${cognom}<br>
    Telefon = ${telefon}<br>
    Descripcio = ${descipcio}`
  )
  // res.send('formulario recibido' + JSON.stringify(req.body))  
  // res.json({
  //   message: 'formulario recibido',
  //   form: req.body
  // });
});



const PORT = 3010;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});     

module.exports = app;