import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



import { MeuPrimeiroComponent } from './teste/meu-primeiro.component';
import {MeuSegundo} from './meu-primeiro2/meu_segundo/meu_segundo.component'
import { Meuprimeiro2Service } from './meu-primeiro2/meu-primeiro2.service';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive'
import { MouseLuz } from './shared/mouseluz.directive';

//material
// import {MatCheckboxModule,MatInputModule,MatIconModule} from '@angular/material';
// import { MatButtonModule } from '@angular/material/button';
// import { MatToolbarModule } from '@angular/material/toolbar';


//apos CRIAR A DIRETIVAS TEMOS QUE IMPORTAR E COLOCAR APENAS NO DECLATIONS
@NgModule({
  declarations: [ //aqui onde devemos colcoar as tags personalidas e temos que importar os componentes ali em cima
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundo,
    OutputPropertyComponent,
    CicloComponent,
    FundoAmareloDirective,
    MouseLuz
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatInputModule,
    // MatIconModule
    
  ],
  providers: [
    Meuprimeiro2Service,
    OutputPropertyComponent
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
