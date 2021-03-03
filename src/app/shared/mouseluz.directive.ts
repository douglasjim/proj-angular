import { Directive,ElementRef,Renderer2, HostListener, HostBinding } from "@angular/core";

//meta dado o hostlistener -  serve para escutar algum evento

@Directive({
    selector: '[MouseLuz]',
})

export class MouseLuz{

    //por exemplo este evento de baixo quando a funcao mouseenter for acionada sera executada oque estiver dentro das chaves
    //e essa execucao so sera feita para a tag que for usar o seletor MouseLuz, mouseenter seria o nome do evento que irá ocorrer quando ele for acionado
    //                   aqui em baixo podemos colocar qualquer nome !!!
    @HostListener('mouseenter') onMouseOver(){
        //this._render2.setStyle(this._elementRef.nativeElement,'background-color','red')
        this.backgroundColor = 'red'
    }

    @HostListener('mouseleave') onMouseLeave(){
        //this._render2.setStyle(this._elementRef.nativeElement,'background-color','purple')
        this.backgroundColor = 'purple'
    }

    //oque esta entre aspas é o nome do evento que irá acontecer ao clicar neste caso
    @HostListener('click') mouseenter(){
        //this._render2.setStyle(this._elementRef.nativeElement,'background-color','blue')
        //assim ficando mais facil alterar as cores das tags
        this.backgroundColor = 'blue'
    }

    //com este host fica mais facil, rapido e com menos codigo alterar styles utilizando o hostlistener
    //                            aqui em baixo seria o nome da variavel que iremos inserir o nome da cor que no caso seria um valor
    @HostBinding('style.backgroundColor') backgroundColor: string;
    
    constructor(private _elementRef: ElementRef, private _render2: Renderer2){

    }

    //com o ngOnInit , ele serve para quando o component for carregador ele ja é acionado
    ngOnInit(){
        //no caso do background ele irá tornar a tag com valor padrao que neste caso é o pink
        this.backgroundColor = 'pink'
        this._render2.setStyle(this._elementRef.nativeElement,'color','yellow')
    }
}

