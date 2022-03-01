
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

var c_gorras = 0;
var c_playeras = 0;
var c_pantalones = 0;

document.getElementById("gorra_azul").onclick = () => {
    c_gorras++;
    document.getElementById("car_gorra").innerHTML = "Gorras: " + c_gorras;
    document.getElementById("total").innerHTML = "$" + ((c_gorras*p_gorras)+(c_playeras*p_playeras)+(c_pantalones*p_pantalon)) + ".00";
    
}

document.getElementById("playera_negra").onclick = () => {
    c_playeras++;
    document.getElementById("car_playera").innerHTML = "Playeras: " + c_playeras;
    document.getElementById("total").innerHTML = "$" + ((c_gorras*p_gorras)+(c_playeras*p_playeras)+(c_pantalones*p_pantalon)) + ".00";
}

document.getElementById("pantalon_gris").onclick = () => {
    c_pantalones++;
    document.getElementById("car_pantalon").innerHTML = "Pantalones: " + c_pantalones;
    document.getElementById("total").innerHTML = "$" + ((c_gorras*p_gorras)+(c_playeras*p_playeras)+(c_pantalones*p_pantalon)) + ".00";
}
