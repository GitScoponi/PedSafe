import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Favoritos } from '../models/Favoritos.model';
import { AuteticationService } from './autetication.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  constructor(
    private db: AngularFireDatabase,
    private _auth: AuteticationService
  ) {}
  banco: string = 'Favoritos';
  getAll() {
    return this.db
      .list(this.banco)
      .snapshotChanges()
      .pipe(
        map((x: any) => {
          return x.map((c: any) => {
            var response = new Favoritos(c.payload.val());
            response.Codigo = c.payload.key;
            return response;
          });
        })
      );
  }
  get(key: string) {
    return this.db.list(this.banco + '/' + key).valueChanges();
  }
  getByUsuario(key: string) {
    return this.db
      .list(this.banco, (ref) => {
        return ref.orderByChild('Usuario').equalTo(key);
      })
      .snapshotChanges()
      .pipe(
        map((x: any) => {
          return x.map((c: any) => {
            var response = new Favoritos(c.payload.val());
            response.Codigo = c.payload.key;
            return response;
          });
        })
      );
  }

  update(value: Favoritos) {
    return this.db
      .list(this.banco)
      .update(value.Codigo.toString(), value)
      .catch((error: any) => {
        console.error(error);
      });
  }
  insert(value: Favoritos) {
    return this.db
      .list(this.banco)
      .push(value)
      .catch((error: any) => {
        console.error(error);
      });
  }
  delete(value: string) {
    return this.db
      .object(this.banco + '/' + value)
      .remove()
      .catch((error: any) => {
        console.error(error);
      });
  }
}
