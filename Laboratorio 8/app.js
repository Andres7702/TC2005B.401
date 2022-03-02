
//fs: filesystem
const filesystem = require('fs');

//Ejercicio 1
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

var suma = 0;
var cont = 0;
for (let i in arreglo) {
    suma += arreglo[i];
    cont += 1;
} 
var promedio = suma/cont;
console.log(promedio);

//Ejercicio2
var nombre = "Andrés Acevedo Caracheo";

filesystem.writeFileSync('Mi_nombre.txt', nombre);

//Ejercicio 3

const contador = (...lista) =>{
    let negativos = 0;
    let positivos = 0;
    let ceros = 0;
    
    for(let i in lista){
        if(lista[i] > 0){
            positivos++;
        }
        if(lista[i] < 0){
            negativos++;
        }
        if(lista[i] == 0){
            ceros++;
        }
    }
    console.log(positivos);
    console.log(negativos);
    console.log(ceros);
}

contador(arreglo);


const http = require('http');

const server = http.createServer( (request, response) => {
    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html><html><head></head><body><h1>Laboratorio 1</h1><h3>Andrés Acevedo Caracheo A01706897</h3><ul><li>¿Cuál es la diferencia entre Internet y la World Wide Web?</li><sub>El internet es la red de computadores a la cual se conectan nuestros dispositivos y la world wide web es la coleccion de paginas que hay en ella.</sub><li>¿Cuáles son las partes de una URL?</li><sub>Las partes son el protocolo + subdominio + dominio + ruta + parametros</sub><li>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</li><sub>GET: Se usa para conseguir información de una pagina o servidor</sub><sub>POST: Se usa para mandar datos a un servidor</sub><sub>HEAD: Funciona como GET pero no obtiene el body de la pagina</sub><sub>PUT: Modifica el recurso completo</sub><sub>PATCH: Solamente modifica parte de un recurso</sub><sub>DELETE: Elimina el recurso completo</sub><li>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</li><sub>Se debe de utilizar el metodo de POST</sub><li>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</li><sub>Se debe de utilizar el metodo de GET</sub><li>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</li><sub>Esto significa que no hubo ningun error</sub><li>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</li><sub>Este error significa que la pagina no fue encontrada. Si el usuario puso la pagina correcta y mando este error si es responsabilidad del desarrollador arreglarlo por que significa que algo no esta bien en su pagina. </sub><li>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</li><sub>Un error 500 significa que hubo un error interno del servidor. Esto es responasabilidad del desarrollador a correguir ya que no es culpa del usuario</sub><li>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</li><sub>Esto significa que ya no deberia de seguir usandose a pesar de que siga funcionando ya que no se le seguira dando mantenimiento</sub></body><footer></footer></html>');
    response.end();
});

server.listen(3000);