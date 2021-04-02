import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Hero, HEROES, Negociacao } from './hero'; //importando o arquivo de outro lugar para usar funcoes ou interfaces dele
// import { Main } from '../../../../TS/main'
// import { Interface } from '../../../../TS/interfaces'
import { Meuprimeiro2Service } from './meu-primeiro2.service';
//import { output } from '../output-property/output-property.component';
import { MeuSegundo } from './meu_segundo/meu_segundo.component'
import {OutputPropertyComponent} from '../output-property/output-property.component'

@Component({
  selector: 'app-meu-primeiro1',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css']
})
export class MeuPrimeiro2Component implements OnInit{
  static pessoa: any;
  cursoss:Number
  //ololo = MeuSegundo
  
  constructor(private meuprimeiro2Service: Meuprimeiro2Service){
    //this.title = "PKOo" - esse me parece que tem prioridade para aprecer na view
    //quando pegamos classes funoces de outros arquivos para este arquivo componente temos que criar uma variavel que irá receber essa funcao ou classe para dizer que ela existe para o componente
    this.name = "kaioken"
    this.cursos = this.meuprimeiro2Service.getCursos();
    
    this.cursoss = this.meuprimeiro2Service.teste;
    console.log(this.cursoss)
    console.log(this.cursos)
    console.log(this.ololo.name)
    console.log(this.teste90)
    console.log(this.HEROES)
    
    
  }

  ololo: Hero = {id: 90, name: 'testeololooooo'};
  //ololo2: Negociacao(data:900,quantidade:9000,valor:1002)
  seila = 90
  onMudou(evento){
    console.log(evento)
    var kkkk = evento
    return kkkk
  }
  
  hero1: Hero = {id: 2, name: 'teste'};
  title: string = "opa"
  teste12 = this.meuprimeiro2Service
  teste900 = console.log(this.teste12)
  teste90 = this.meuprimeiro2Service.getCursos()[0];
  cursos: string[];
  qualquer: any[];
  url: String = "http:www.douglas.cursos.com";
  name: String = "Name heros";
  // povoando o html com os dados da interface, antes disso temos que importar a classe la em cima para que ela seja reconhecida aqui
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  
  //pegando a variavel array e atribuindo para uma outra variavel apenas para dizer que ele existe e usar-mos no html
  HEROES = HEROES;
  urlimagem = "http://lorempixel.com/g/400/200/"
  valoratual: string
  novovalor: String
  // para que a funcao funcione temos que criar uma variavel que recebe o valor como falso, poque logo quando se inicia o site nao tem mouse em cima do botao
  // logo , a pergunta se existe um mouse no botao se inicia com false
  ismouse = false 
  //essa variavel esta conectada com o input que esta no htmls
  nomee = "testedomouse"
  pessoa = {
    nome: "douglas",
    idade: 24,
    documento: {
      rg: 370910290129,
      cpf: 1213458122
    }
  }
  //esse variavel( de baixo) esta sendo usada dentro da tag do componente que criamos do output
  valorinicial:number = 15
  getValor(){
    // return this.hero.id + 3;
    return this.HEROES[0].id + 3;
  }
  botaoclicado(){
    alert("fi clicado")
  }

  //de acofrdo com os software iremos enviar os dados que esta sneod reprado ara quesrroa de verificao mas ate entao vamos  mas ai entoa ate mvamos mandar par a quesya de quakidaifucaao mas saenos que estao de acodo com oque esles evniaraoa mas at eentao amps entamos de aco co oqoue eles se colcoaram apra audar mas ate etoa vams aoejas manter a qualificiacao mas ais isso vamos revisar se esta certo e de cor com o amnacs
  
  // dizendo para essa funcao que o valor que irá receber é do tipo keyborad temos acesso a varias funcoes dentro dele
  upp(kok: KeyboardEvent){
    //aqui em baixo estamos dizendo que queremos pegar o valor que sera digitado no input no qual foi inserido esta funcao
    //e queremos pegar o valor la dentro e pra pegar temos que ir nessa funcao target e colcoar a varaivel e o target dentro de outro parentese dizendo que isso é algo do html
    console.log((<HTMLInputElement>kok.target).value)
    return this.valoratual = (<HTMLInputElement>kok.target).value
  }
  //a funco de baixo é referente ao mouse quando entrar em algum lugar
  MouseOver(){
    this.ismouse = !this.ismouse;
  }
  //a funcao de baixo serve para dizer quando o mouse sai de um lugar
  mouseout(){
    this.ismouse = !this.ismouse;
  }
  salvarvalor(valor){
      this.novovalor = valor
      return this.novovalor;
  }

  Addcurso(opa){
    this.cursos.push(opa)
    //alert(this.cursos)
    //alert(KeyboardEvent.DOM_KEY_LOCATION_RIGHT)
    //alert(KeyboardEvent.DOM_KEY_LOCATION_STANDARD)
  }

  okok: string

  varias: any = {
    titulo: "meu livro é o melhor",
    rating: 4.5123,
    numeroDePaginas: 300,
    preco: 49.99,
    dataDeLancamento: new Date(2016,5,23),
    url: 'www.google.com.br',
  }

  //PODEMOS CRIAR VARIAVEIS FUNCOES ETC.. PUBLICO OU PRIVADO
  public tdbk: Number
  private tdb: Number
  ngOnInit(){

    this.tdb = this.cursoss
    //alert(this.tdb)
  }



}

