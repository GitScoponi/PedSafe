import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CalculadorasService {
  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('Medicamentos').valueChanges()
  }
  get(key: string) {
    return this.db.list('Medicamentos/'+ key).valueChanges();
  }
  getTypes(){
    return this.db.list('TipoMedicamento').valueChanges()

  }
}
