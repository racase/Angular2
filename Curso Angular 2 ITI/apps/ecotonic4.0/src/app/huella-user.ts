export class HuellaUser {
    nombre : string;
    agua : number;
    gas : number;
    electricidad : number;
    foto: string;

    constructor(_nombre:string, _agua:number, _electr:number, _gas:number,
        _foto: string)  {
        this.nombre = _nombre;
        this.agua = _agua;
        this.electricidad = _electr;
        this.gas = _gas;
        this.foto = _foto;
        //"http://frikivision.com/img/chikilicuatre.jpg"
    }
}
