const express= require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


const rutas = require('/Users/Andres/Desktop/Construcción de Software/TC2005B.401/Laboratorio 11/routes/rutas_nombres.js');
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