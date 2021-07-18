import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Favoritos } from '../models/favoritos.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Medicamentos } from '../models/medicamentos.model';
import { AuteticationService } from './autetication.service';
@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private url: 'Favoritos';
  constructor(
    private db: AngularFireDatabase,
    private _auth: AuteticationService
  ) {}

  getAll = new Promise<Favoritos[]>((resolve, reject) => {
    var favoritos = localStorage.getItem('Favoritos');

    if (favoritos) {
      var favoritoList: Favoritos[] = JSON.parse(favoritos);
      resolve(favoritoList.filter((x) => x.IDUsuario == this._auth.getUser().ID));
    } else {
      resolve([]);
    }
    reject('Ocorreu um erro ao buscar favoritos');
  });
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
  getById(ID: string) {
    return this.db
      .list<Favoritos>(this.url)
      .valueChanges()
      .pipe(map((x) => x.filter((x) => x.IDUsuario == ID)));
  }
  add(value: Favoritos) {
    return this.db.list(this.url).push(value);
  }
  del() {}
}
