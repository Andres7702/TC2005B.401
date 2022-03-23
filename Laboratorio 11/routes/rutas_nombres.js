const express = require('express');
const router = express.Router();
const path = require('path');



const Nombres = ["Andres"];

router.get('/nuevo', (request, response, next) => {
    response.render('nuevo');
});

router.post('/nuevo', (request, response, next) => {
        Nombres.push(request.body.nombre);
        response.redirect('/nombres');
});

router.use('/', (request, response, next) => {
    response.render('nombres',{Nombres: Nombres});
});


module.exports = router; 