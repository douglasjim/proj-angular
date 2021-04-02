import { Meuprimeiro2Service } from './../meu-primeiro2/meu-primeiro2.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MeuPrimeiro2Component } from '../meu-primeiro2/meu-primeiro2.component';
// import { CicloComponent } from '../ciclo/ciclo.component  ';
import { MatSliderModule } from '@angular/material/slider';




@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})

export class OutputPropertyComponent implements OnInit {

  cursos2:string[] = ['Spring','Dart','Javascript']

  ololo: number = 10
  http: any;

  //TEMOS DOIS JEITOS DE PEGAR OS VALORES DO SERVICO, CRIANDO UMA VARIAVEL IGUAL NA LINHA DE BAIXO E ASSIM PODEMOS TER ACESSO AS VARIAVEIS FUNCOES ETC... DO SERVICO QUE CRIAMOS
  cursoService1: Meuprimeiro2Service

  //TEMOS A OPCAO TAMBEM DE CRIAR UMA VARIAVEL DENTRO DO CONSTRUCTOR COMO PRIVADA ASSIM SO ESSE COMPONENTE TEM ACESSO AOS VALORES QUE ESTA VINDO DO SERVICO QUE FORMOS USAR CONSUMIR, EXEPLO ABAIXO
  constructor(private cursoService2: Meuprimeiro2Service) { 
    let cursoService22 = this.cursoService2.getCursos
    console.log(cursoService22 + "TESTE COM O CONTRUCTOR E SERVICE")
  }

  
    

  email: string;

  //PODEMOS COLOCAR O TIPO CHAVES PARA RETORNAR ESSE VALOR

  configUrl = 'http://localhost:3412/operadoras';

  getConfig() {
    return this.http.get(this.configUrl);
    
  }


  add(): any{
    var b = this.ololo 
    //console.log(b)
    this.nomedoCurso = "DAAADDDDAA"
    // var teste = {
    //   b: "9999999",
    //   c: "2127121821"
    // }
    // return teste
    console.log(this.email)
    return b
  }

  a: string | number = 90
  b: string | number | boolean = "false"
  add2():{} | any{
    console.log(this.a)
    console.log(this.b)

    let c  = [{a: this.a,
      b:this.b
    }]
    
    return c
  }

  // ll = this.add2();
  // lll = this.ll
  tipeof(){
    // console.log("erro?"+ this.add2())
    //console.log("tipodafuncao" + typeof(this.add()))
    //console.log(this.add())
    let k = this.add2()
    console.log(k[0].b = "DOUGLASSSSS")
    //console.log(kai)
    //console.log(this.getConfig())
    console.log(this.ololo)
  }

  ololoo(){
    let k = this.add2()
    console.log(k)
  }

  

  //PORQUE nao conseguimos pegar os valores que estao neste obj

  //nao entendi isso na aula 13 , isso seria algo refrente a nome da varaivel internamente e externamente
  @Input('nome') nomedoCurso: string = "DOGAO";
  
  kkkk: string
  kkkk1: number

  //talvez seja explicitando que essa variavel irá servir como input la no html
  //me parece que com o @input  podemos inserir um valor direto na tag desse component
  @Input() valor: number = 90;

  //com essa variavel sendo inserida na funcao e quando chamamos ela aparece no console as  opcoes de eventos que podemos usar no input
  @ViewChild('campoInput') campoValorInput: HTMLElement;
  //com a variavel de baixo conseguimos pegar o valor dentro de um input
  @ViewChild('campoInput') campoValorInput2: ElementRef; 

  // na linha de baixo temos um evento, alem disso temos que fazer a importacao ali cima para que isso funcione
  @Output() mudouValor = new EventEmitter();
  //aula 14 da loiane , na linha de cima nao esta funcionando
  kasas = 900
  add4(){
    this.mudouValor.emit(this.kasas)
    console.log(this.mudouValor + "okok")
    console.log(this.mudouValor.emit(89))
  }
  
  ngOnInit() {
    console.log(this.cursoService1.getCursos + "TESTE COM O ONIT E SERVICE")
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
