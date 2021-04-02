import { Live } from './live.modal';
import { Component, OnInit } from '@angular/core';
import { LiveService } from './live.service';
import { ResponsePageble } from './responsePageble.model'
import { MatSliderModule } from '@angular/material/slider';
import { DefaultFull } from '../shared/index.directive'


@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  okok(ad1: number,ad2: number):number{

    console.log(ad1)
    console.log(ad2)
    return ad1+ad2
  }


  cursos: string[] = ["angular7","Javascript"];
  mostrarcursos: boolean = true 
  kaioken: any = '90'
  olhaohidden: boolean = true
  Qualaba: string = "";
  Fonte: number =0;

  tarefa:any = {
    desc:'descricao da tarefa',
    responsavel: {
      usuario:{
        nome: "opaaa222222"
      }, 
      nome: "opaaa"
    },
    usuario: 'okloias',
    nome: "opaaa"
  }

  

  Mudou(ad:number){
    this.mostrarcursos = !this.mostrarcursos,
    this.olhaohidden = !this.olhaohidden
    console.log(this.okok(Number(ad),30))
  }

  //nao esquecer de qunaod for array de agum tipo temos que colocar os colchetes do lado do tipo
  //alem disso nao podemos adicionar numero apos o 0 ate porque nao faz sentido
  Listaitens:number[] = [10,11,30,40,99,999,34,58,1234,9,0,-10,-900]; 

  teste10: number
  here2(){
    this.Listaitens.push(this.teste10)
    console.log(this.Listaitens)
    console.log("this.teste10")
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
