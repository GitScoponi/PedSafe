import { TypeofExpr } from "@angular/compiler";

export class Medicamentos {
    Codigo!: number;
    CodigoTipo!: number;
    Medicamento!: string;
    Rota!: string;
    Favorito!:boolean
    constructor(obj:Partial<Medicamentos>={}){
        Object.assign(this,obj);
    }
}