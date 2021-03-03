import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// todos as telas que criamos anteriormente precisamos criar caminhos pra elas e é aqui que criamos o caminho pra cada pagina ou tela criada anteriormente

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
