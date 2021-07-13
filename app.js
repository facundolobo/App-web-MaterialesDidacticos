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
app.use(express.static('public/assets/images/productos')); //cuando ingresa '/' redigira al index.html
app.use(express.static('public/assets/images/portadas')); //cuando ingresa '/' redigira al index.html

app.get('/', (req, res) => {
 
    res.render('home',
    {
        nombre: 'Fabian Lobo',
        titulo: 'Material Didáctico',
        
    }); //lo enviamos al archvo credo en public
})

app.get('/nuestrosProductos', (req, res) => {
 
    res.render('nuestrosProductos',
    {
        nombre: 'Fabian Lobo',
        titulo: 'Material Didáctico',
        
    }); //lo enviamos al archvo credo en public
})

app.get('/acercaNosotros', (req, res) => {
 
    res.render('acercaNosotros',
    {
        nombre: 'Fabian Lobo',
        titulo: 'Material Didáctico',
        
    }); //lo enviamos al archvo credo en public
})

app.get('/contacto', (req, res) => {
 
    res.render('contacto',
    {
        nombre: 'Fabian Lobo',
        titulo: 'Material Didáctico',
        
    }); //lo enviamos al archvo credo en public
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })