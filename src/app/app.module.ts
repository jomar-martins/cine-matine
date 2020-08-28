import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { MenuComponent } from './shared/components/menu/menu.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';
import { FilmeCardComponent } from './shared/components/filme-card/filme-card.component';
import { CadastroComponent } from './filmes/cadastro/cadastro.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilmesComponent } from './filmes/filmes/filmes.component';
import { LoginComponent } from './login/login.component';
import { CriarComponent } from './login/criar/criar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    FilmeCardComponent,
    FilmesComponent,
    CadastroComponent,
    NotFoundComponent,
    LoginComponent,
    CriarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
