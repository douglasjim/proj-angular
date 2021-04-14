import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './teste/meu-primeiro.component';
import { MeuSegundo } from './meu-primeiro2/meu_segundo/meu_segundo.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

//MeuSegundo

const APP_ROUTES: Routes = [
    {path: '', component: AppComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'meuPrimeiro', component: MeuPrimeiroComponent},
    {path: 'MeuSegundo', component: MeuSegundo},
    {path: 'MeuPrimeiro2', component: MeuPrimeiro2Component},
    
]


//forChild
//forRoot = tem todas as rotas da aplicacao
 export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)