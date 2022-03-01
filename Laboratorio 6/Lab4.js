
document.getElementById("password").onkeyup = () => {
    document.getElementById("respuesta").innerHTML = "Contraseña debil";
    if(document.getElementById("password").value.includes("$")){
        document.getElementById("respuesta").innerHTML = "Contraseña segura";
    }
}

const p_gorras = 349;
const p_playeras = 499;
const p_pantalon = 1299;

document.getElementById("precio_gorra").innerHTML = "$" + p_gorras + ".00";
document.getElementById("precio_playera").innerHTML = "$" + p_playeras + ".00";
document.getElementById("precio_pantalon").innerHTML = "$" + p_pantalon + ".00";

let c_gorras = 0;
let c_playeras = 0;
let c_pantalones = 0;

document.getElementById("gorra_azul").onclick = () => {
    c_gorras++;
}

document.getElementById("playera_negra").onclick = () => {
    c_playeras++;
}

document.getElementById("pantalon_gris").onclick = () => {
    c_pantalones++;
}