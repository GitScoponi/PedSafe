import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./pages/Navegacao/cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () => import('./pages/Navegacao/esqueceu-senha/esqueceu-senha.module').then( m => m.EsqueceuSenhaPageModule)
  },
  {
    path: 'medicamento',
    loadChildren: () => import('./pages/Navegacao/medicamentos/medicamentos.module').then( m => m.MedicamentosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
