export class Favoritos {
  Codigo:string;
  Usuario!: string;
  Codigo_Calculadora!: number;
  Titulo:string;
  constructor(obj: Partial<Favoritos> = {}) {
    Object.assign(this, obj);
  }
}
