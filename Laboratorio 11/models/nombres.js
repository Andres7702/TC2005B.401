
const nombres = [
    {t_nombre: "Andres"},
];

module.exports = class nombre {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(texto) {
        this.t_nombre = texto;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        nombres.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return nombres;
    }

}