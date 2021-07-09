require('dotenv').config(); //para usar las variables de entorno

const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estático
app.use(express.static('public')); //cuando ingresa '/' redigira al index.html



// app.get('/generic', (req, res) => {
//     res.render('generic',{
//         nombre: 'Fernando Herrera',
//         titulo: 'Curso de Node'
//     }); //lo enviamos al archvo credo en public
// })

// // app.get('/generic', (req, res) => {
// //     res.sendFile(__dirname+'/public/generic.html'); //lo enviamos al archvo credo en public
// // })

// app.get('/elements', (req, res) => {
//     res.render('elements',{
//         nombre: 'Fernando Herrera',
//         titulo: 'Curso de Node'
//     }); //lo enviamos al archvo credo en public
// })

app.get('*', (req, res) => {
        res.sendFile(__dirname+'/public/index.html'); //lo enviamos al archvo credo en public
    })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })