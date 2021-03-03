import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MeuPrimeiro2Component } from '../meu-primeiro2/meu-primeiro2.component';
// import { CicloComponent } from '../ciclo/ciclo.component  ';



@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})

export class OutputPropertyComponent implements OnInit {

  cursos2:string[] = ['Spring','Dart','Javascript']

  //PERGUNTAR PARA O PESSOAL SE PARA PEGAR FUNCAO , VARIAVEL ENTRE OUTRAS COISAS DE OUTRO COMPONENTE É PRECISO QUE ESSA COISA ESTEJA DENTRO DE UMA FUNCAO QUE RETORNE ESSE VALOR PARA QUE POSSAMOS USAR EM OUTRO COMPONENTE?
  constructor() { 

  }



  

  //nao entendi isso na aula 13 , isso seria algo refrente a nome da varaivel internamente e externamente
  @Input('nome') nomedoCurso: string = 'interno e externo';

  //talvez seja explicitando que essa variavel irá servir como input la no html
  //me parece que com o @input  podemos inserir um valor direto na tag desse component
  @Input() valor: number = 0;

  //com essa variavel sendo inserida na funcao e quando chamamos ela aparece no console as  opcoes de eventos que podemos usar no input
  @ViewChild('campoInput') campoValorInput: HTMLElement;
  //com a variavel de baixo conseguimos pegar o valor dentro de um input
  @ViewChild('campoInput') campoValorInput2: ElementRef; 

  // na linha de baixo temos um evento, alem disso temos que fazer a importacao ali cima para que isso funcione
  //@Output() mudouValor = new EventEmitter();
  //aula 14 da loiane , na linha de cima nao esta funcionando

  ngOnInit(): void {
  }

  // here2(){
  //   this.Listaitens.push(10)
  //   console.log(this.Listaitens)
  // }

  incrementa(){
    //pegando o valor do input, indepedente de qual forma seja o input, por checkbox, escrevendo ou numero sendo adicionada por essas funcao
    console.log(this.campoValorInput2.nativeElement.value)
    this.valor = this.valor + 1
    // sempre quando for clicar e chamar as funcoes de + e - irá acontecer a coisa de baixo
    //this.mudouValor.emit({novovalor: this.valor})
  }

  decrementa(){
    this.valor = this.valor - 1
    //this.mudouValor.emit({novovalor: this.valor})
  }

  onMudouValor(evento){
    console.log(evento)
  }

}
