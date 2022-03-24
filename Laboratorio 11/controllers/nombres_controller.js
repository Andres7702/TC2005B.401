const Nombre = require('../models/nombres');


exports.agregar_get = (request, response, next) => {
    response.render('../views/nuevo');
};

exports.agregar_post = (request,response,next) => {
    const new_nombre = new Nombre(request.body.nombre);
    new_nombre.save();
    response.redirect('/nombres');
}

exports.lista = (request, response, next) => {
    response.render('../views/nombres',{Nombres: Nombre.fetchAll()});
}