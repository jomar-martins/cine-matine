import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CriarComponent } from './login/criar/criar.component';
import { CadastroComponent } from './filmes/cadastro/cadastro.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilmesComponent } from './filmes/filmes/filmes.component';

const routes: Routes = [
  { path:  '', redirectTo:  'filmes', pathMatch:  'full' },
  { path: 'conta', component: CriarComponent}, // deverá redirecionar automaticamente para login quando não estiver logado ou para conta quando estiver
  { path: 'login', component: LoginComponent},
  { path: 'login/criar', component: CriarComponent},
  { path: 'filmes', component: FilmesComponent},
  { path: 'filmes/cadastro', component: CadastroComponent},
  //{ path: 'admin', canActivate : [AppGuard], component: AdminComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
