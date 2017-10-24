export class Agua {
    private _id : number;
    private _recurso : string;
    private _consumoEnLitros : string;
    private _tipo : string;

    constructor() {
        this._id = -1;
        this._recurso = "";
        this._consumoEnLitros = "";
        this._tipo = "";
    }

    get id() : number {
        return this._id;
    }

    set id(nuevoId : number) {
        this._id = nuevoId;
    }

    get recurso() : string {
        return this._recurso;
    }

    set recurso(nuevoRecurso : string) {
        this._recurso = nuevoRecurso;
    }

    get consumoEnLitros() : string {
        return this._consumoEnLitros;
    }

    set consumoEnLitros(nuevoConsumo : string) {
        this._consumoEnLitros = nuevoConsumo;
    }

    get tipo() : string {
        return this._tipo;
    }

    set tipo(nuevoTipo : string) {
        this._tipo = nuevoTipo;
    }

}
