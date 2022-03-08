
//fs: filesystem
const filesystem = require('fs');

const Nombres = [];
const http = require('http');

const server = http.createServer( (request, response) => {
    
    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title>Laboratorio 10</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Nombres facoritos</h1>');
        response.write('<br><br>');
        response.write('<ul>')
        for(let i in Nombres){
            response.write('<li>' + Nombres[i] + '</li>')
        }
        response.write('</ul>')
        response.write('<br><br>');
        response.write('<a href="/pag2">Escribe tus nombres favoritos</a>');
        response.write('</body>'); 
        response.end();
    }else if(request.url === '/pag2'&& request.method === 'GET'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title>Laboratorio 10</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Escribe tus nombres favoritos</h1>');
        response.write('<h2>Escribe aqui: </h2>');
        response.write('<form action="pag2" method="POST">');
        response.write('<label for="nombre">Nombre: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Escribe aqui...">');
        response.write('<br><br>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Lista nombres favoritos</a>');
        response.write('<br><br>');
        response.write('<a href="/pag3">Ir a pagina 3</a>');
        response.write('</body>');
        response.end();
    }else if(request.url === '/pag2'&& request.method === 'POST'){
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const nuevo_dato = datos_completos.split('=')[1];
            Nombres.push(nuevo_dato);
        });
    }else if(request.url === '/pag3'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title>Laboratorio 10</title>');            
        response.write('</head><body>');
        response.write('<h1 id="principal">Esta es la pagina </h1>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a pagina 1</a>');
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
