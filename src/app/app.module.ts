import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import firebase from "firebase/app";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
var firebaseConfig = {
  apiKey: "AIzaSyB8HBhPPNLv0VbpXuXp8Tu2ylCeH2D22pg",
  authDomain: "pedsafe-b44f4.firebaseapp.com",
  databaseURL: "https://pedsafe-b44f4-default-rtdb.firebaseio.com",
  projectId: "pedsafe-b44f4",
  storageBucket: "pedsafe-b44f4.appspot.com",
  messagingSenderId: "58442520255",
  appId: "1:58442520255:web:6741059180126c6026580a",
  measurementId: "G-FJWEX1Q72M"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule, AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
