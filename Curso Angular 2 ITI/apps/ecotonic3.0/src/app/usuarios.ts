export class Usuarios {
    nombre: string;
    agua: number;
    gas: number;
    electricidad: number;
    foto: string;

    constructor(nombre: string , agua : number, gas : number, electricidad: number, foto: string ){
        this.nombre = nombre;
        this.agua = agua;
        this.gas = gas;
        this.electricidad = electricidad;
        this.foto = foto;
    }
}
