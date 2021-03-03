import { Component, Input } from '@angular/core';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends MeuPrimeiro2Component{
  title = 'proj-angular';
  url = "meulink"

  nomedoCurso: string = 'Angular'
  
}
