import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Favoritos } from '../models/favoritos.model';
import { Medicamentos } from '../models/medicamentos.model';
import { AuteticationService } from './autetication.service';

@Injectable({
  providedIn: 'root',
})
export class CalculadorasService {
  constructor(
    private db: AngularFireDatabase,
    private _auth: AuteticationService
  ) {}

  getAll() {
    return this.db
      .list<Medicamentos>('Medicamentos')
      .valueChanges()
      .pipe(
        map((first) => {
          return first.map((x: Medicamentos) => {
            var ehFavorito: boolean =
              this.getFavoritos().filter(
                (filter) => filter.IDCalculadora == x.Codigo
              )[0] != null;
            return new Medicamentos({
              Codigo: x.Codigo,
              CodigoTipo: x.CodigoTipo,
              Medicamento: x.Medicamento,
              Rota: x.Rota,
              Favorito: ehFavorito,
            });
          });
        })
      );
  }
  get(key: string) {
    return this.db.list('Medicamentos/' + key).valueChanges();
  }
  getTypes() {
    return this.db.list('TipoMedicamento').valueChanges();
  }

  upd(value: Medicamentos) {
    return this.db
      .list('Medicamentos')
      .update(value.Codigo.toString(), value)
      .catch((error: any) => {
        console.error(error);
      });
  }
  getFavoritos() {
    var favoritos = localStorage.getItem('Favoritos');
    if (favoritos) {
      var favoritoList: Favoritos[] = JSON.parse(favoritos);
      return favoritoList.filter((x) => x.IDUsuario == this._auth.getUser().ID);
    }
    return [];
  }
  Favoritar(CodigoMedicamento: number) {
    var favoritosList: Favoritos[] = [];
    var favoritos = localStorage.getItem('Favoritos');
    var user = this._auth.getUser().ID as string;
    if (favoritos) {
      favoritosList = JSON.parse(favoritos);
      var existeFavorito = favoritosList.filter(
        (x) => x.IDUsuario == user && x.IDCalculadora == CodigoMedicamento
      )[0];
      if (existeFavorito == null) {
        favoritosList.push(
          new Favoritos({
            IDUsuario: user,
            IDCalculadora: CodigoMedicamento,
          })
        );
      } else {
        favoritosList.splice(favoritosList.indexOf(existeFavorito), 1);
      }
      localStorage.setItem('Favoritos', JSON.stringify(favoritosList));
    } else {
      favoritosList.push(
        new Favoritos({
          IDUsuario: user,
          IDCalculadora: CodigoMedicamento,
        })
      );
      localStorage.setItem('Favoritos', JSON.stringify(favoritosList));
    }
  }
}
