function tabla_cuadrados() {
    let tabla = prompt("Escribe un numero");
    let resultado = "<table>";
    for (let i = 1; i <= tabla; i++) {
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>";
        resultado += "</tr>"
    }
    resultado += "</table>";
    return resultado;
}

function suma_aleatoria(){
    let num1 = Math.floor(Math.random() * 11);
    let num2 = Math.floor(Math.random() * 11);

    let FechaHora = new Date();
    let horas1 = FechaHora.getHours();
    let minutos1 = FechaHora.getMinutes();
    let segundos1 = FechaHora.getSeconds();

    let suma = prompt("Contesta la suma: " + num1 + "+" + num2 + "=" );

    let FechaHora2 = new Date();
    let horas2 = FechaHora2.getHours();
    let minutos2 = FechaHora2.getMinutes();
    let segundos2 = FechaHora2.getSeconds();
    
    confirm("Tiempo de respuesta: " + (horas2-horas1) + ":" + (minutos1-minutos2) + ":" + (segundos2-segundos1));

    if(suma == num1 + num2){
        return"Correcto";
    }
    else{
        return"Incorrecto";
    }
}

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
    document.getElementById("negativos").innerHTML = negativos;
    document.getElementById("positivos").innerHTML = positivos;
    document.getElementById("ceros").innerHTML = ceros;

}

const promedio = (...matriz) =>{
    let proms = [];
    for(let i in matriz){
        let sums = 0;
        for(let j in matriz[i]){
            sums += matriz[i][j];
        }
        sums = sums/5;
        proms.push(sums);
    }
    document.getElementById("promedios").innerHTML = proms;
}

const reversa = () =>{
    let numero = prompt("Ingresa un número: ");
	let num_array = numero.split("");
	let reverse_array = num_array.reverse();
	let reverse_num = reverse_array.join("");
	document.getElementById("reversa").innerHTML = reverse_num	;
}

document.getElementById("tabla").innerHTML = tabla_cuadrados();

document.getElementById("suma").innerHTML = suma_aleatoria();

let arreglo = [10, 0, -3, 5];
contador(...arreglo);

let mat_arre = [[10,2,3,4,3],[8,3,2,2,2],[1,2,3,4,5]];
promedio(...mat_arre);

reversa();
