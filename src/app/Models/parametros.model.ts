
export class Parametros {
    Codigo: string;
    Codigo_Calculadora: string;
    Tipo: string;
    Titulo:string;
    Posicao:number;
    constructor(obj:Partial<Parametros>={}){
        Object.assign(this,obj);
    }
}