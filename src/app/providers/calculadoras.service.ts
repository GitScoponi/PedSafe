import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Medicamentos } from '../Models/medicamentos.model';

@Injectable({
  providedIn: 'root'
})
export class CalculadorasService {
  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('Medicamentos').valueChanges()
  }
  get(key: string) {
    return this.db.list('Medicamentos/' + key).valueChanges();
  }
  getTypes() {
    return this.db.list('TipoMedicamento').valueChanges()
  }

  upd(value: Medicamentos) {
    return this.db.list('Medicamentos').update(value.Codigo.toString(), value)
      .catch((error: any) => {
        console.error(error)
      });

  }


}
