import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app_meusegundo',
  templateUrl: './meu_segundo.component.html',
  styleUrls: ['./meu_segundo.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class MeuSegundo {

  constructor(){
    this.title2 = 'Douglas2';
  }

  title2:string = 'Douglas';
}