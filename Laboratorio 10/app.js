
//fs: filesystem
const filesystem = require('fs');


const http = require('http');

const server = http.createServer( (request, response) => {
    
    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title>Laboratorio 10</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Esta es la pagina 1</h1>');
        response.write('</body>');
        response.end();
    }else if(request.url === '/pag2'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title>Laboratorio 10</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Esta es la pagina 2</h1>');
        response.write('</body>');
        response.end();
    
    }else if(request.url === '/pag3'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title>Laboratorio 10</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Esta es la pagina 3</h1>');
        response.write('</body>');
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title>Laboratorio 10 | Not found</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este no es el laboratorio 10.</h1>');
        response.write('</body>');
        response.end();
    }




    
















    /*
    const datos = [];
    request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
    });
    return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nuevo_dato = datos_completos.split('=')[1];
        return response.end();
    });

    response.statusCode = 404;
    */


});

server.listen(3000);
