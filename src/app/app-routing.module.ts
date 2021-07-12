import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculadoras',
    pathMatch: 'full'
  },
  {
    path: 'calculadoras',
    loadChildren: () => import('./pages/Navegacao/calculadoras/calculadoras.module').then( m => m.CalculadorasPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/Navegacao/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/Navegacao/login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
