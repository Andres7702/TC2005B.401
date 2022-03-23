const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');


const rutas = require('./routes/rutas_nombres.js');
app.use('/nombres', rutas);

//Middleware
app.use((request,response,next)=>{
    console.log('Middleware!');
    next(); //avanzar al siguiente middleware
});

app.use((request,response,next)=>{
    console.log('Otro middleware');
    response.send('<!DOCTYPE html><html><head><title>Laboratorio | Not found</title></head><body><h1 id="principal">Este no es el laboratorio.</h1></body>')
});

app.listen(3000);