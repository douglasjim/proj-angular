import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { OutputPropertyComponent } from './output-property.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

//componentes - o nome que esta entre chaves tem que ser o mesmo da classe exportada
import { MeuPrimeiro2Component } from '../meu-primeiro2/meu-primeiro2.component';
import { CicloComponent } from '../ciclo/ciclo.component';
import { BrowserModule } from '@angular/platform-browser';

//Material
// import {MatButtonModule} from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  exports: [
    // MatButtonModule,
    // MatIconModule,
    // MatDialogModule,
    // MatDividerModule
    MatDatepickerModule
  ],

  //aqui inserimos os componentes de outras pastas
  declarations: [
    OutputPropertyComponent,
    MeuPrimeiro2Component,
    CicloComponent
    ],
  imports: [
    // MatButtonModule,
    // MatIconModule,
    // MatDialogModule,
    // MatDividerModule,
    CommonModule,
    FormsModule,
    HttpHeaders,
    HttpClientModule,
    BrowserModule,
    MatDatepickerModule
  ]
})
export class OutputPropertyModule {

}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */