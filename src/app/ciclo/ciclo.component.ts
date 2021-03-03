import { Live } from './live.modal';
import { Component, OnInit } from '@angular/core';
import { LiveService } from './live.service';
import { ResponsePageble } from './responsePageble.model'

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  cursos: string[] = ["angular7","Javascript"];
  mostrarcursos: boolean = true //variavel booleana
  kaioken: any = '90'
  olhaohidden: boolean = true
  Qualaba: string = "";
  Fonte: number =0;

  tarefa:any = {
    desc:'descricao da tarefa',
    responsavel: null 
  }

  

  Mudou(){
    this.mostrarcursos = !this.mostrarcursos,
    this.olhaohidden = !this.olhaohidden
  }

  //nao esquecer de qunaod for array de agum tipo temos que colocar os colchetes do lado do tipo
  //alem disso nao podemos adicionar numero apos o 0 ate porque nao faz sentido
  Listaitens:number[] = [10,11,30,40,99,999,34,58,1234,9,0,-10,-900]; 

  teste10: number
  here2(){
    this.Listaitens.push(this.teste10)
    console.log(this.Listaitens)
  }

  //funcao para trocar o valor da variavel T or F
  MostrarOuEsconder(){
    this.mostrarcursos = !this.mostrarcursos
  }

  // public liveservice: LiveService
  constructor() { }

  // LivesPrevi: any

  ngOnInit(): void {
    // this.getLivess();
  }

  // getLivess(){
  //   this.liveservice.getLives('previous').subscribe(data => {
  //     this.LivesPrevi = data.name;
  //     console.log(this.LivesPrevi)
  //   }) 
  // }



}
