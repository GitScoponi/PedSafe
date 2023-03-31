import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginAuthGuard } from './guards/login-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'calculadoras',
    loadChildren: () => import('./pages/Navegacao/calculadoras/calculadoras.module').then( m => m.CalculadorasPageModule),
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/Navegacao/favoritos/favoritos.module').then( m => m.FavoritosPageModule),
    canActivate: [LoginAuthGuard],
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
    path: 'calculadora',
    loadChildren: () => import('./pages/Navegacao/calculadora/calculadora.module').then( m => m.CalculadoraPageModule),
    canActivate: [LoginAuthGuard],
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
