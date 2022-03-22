const express = require('express');
const router = express.Router();

const Nombres=[];

router.get('/nuevo', (request, response, next) => {
    let respuesta = '<!DOCTYPE html> <html><head> <title>Laboratorio</title> </head><body> <h1 id="principal">Escribe tus nombres favoritos</h1> <h2>Escribe aqui: </h2> <form action="/nombres/nuevo" method="POST"> <label for="nombre">Nombre: </label> <input type="text" id="nombre" name="nombre" placeholder="Escribe aqui..."><br><br><input type="submit" value="Enviar"></form><br><br><a href="/">Lista nombres favoritos</a></body></html>';
    response.send(respuesta);
});

router.post('/nuevo', (request, response, next) => {
        Nombres.push(request.body.nombre);
        response.redirect('/nombres');
});

router.use('/', (request, response, next) => {
    let respuesta = '<!DOCTYPE html> <html><head> <title>Laboratorio</title> </head><body> <h1 id="principal">Nombres favoritos</h1> <br><br> <ul>';
    for(let i in Nombres){
        respuesta += '<li>' + Nombres[i] + '</li>';
    }
    respuesta += '</ul> <br><br> <a href="/nombres/nuevo">Escribe tus nombres favoritos</a> </body></html>';
    response.send(respuesta); 
});


module.exports = router;