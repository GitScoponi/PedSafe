import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Favoritos } from '../Models/favoritos.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private url: 'Favoritos'
  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list(this.url).stateChanges();
  }
  getById(ID: string) {
    return this.db.list<Favoritos[]>(this.url).snapshotChanges().pipe(map(x => x.filter(f => f.key == ID)));
  }
  add(value: Favoritos) {
    return this.db.list(this.url).push(value)
  }
  del() {

  }
}
