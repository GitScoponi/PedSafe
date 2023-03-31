export class Menu {
  Codigo: string;
  Titulo: string;

  constructor(obj: Partial<Menu> = {}) {
    Object.assign(this, obj);
  }
}
