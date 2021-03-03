import { Directive,ElementRef,Renderer2 } from "@angular/core";



//com essa diretiva / selector a baixo inseremos nas tags que queremos alterar ( neste caso) o background e as cores da fonte
@Directive({
    selector: 'p[fundoAmarelo]',
    //colocando o ( p ) fora dos colchetes estamos dizendo que esse seletor so ira funcionar nas tags p , caso queira que funcione apenas no button, devemos colocar button e assim por diantes
})

export class FundoAmareloDirective{

    

    //criando uma variavel privada do tipo ElementRef
    constructor(private _elementRef:ElementRef, private _renderer: Renderer2){
        //usando o console.log conseguimos obter mais nformacoes do elementRef
        console.log(this._elementRef);
        //assim conseguimos ter acessos as coisas para alterar a tag
        
        //this._elementRef.nativeElement.style.backgroundColor = "yellow",
        //this._elementRef.nativeElement.style.color = "black"
        //POREM NAO PODEMOS USAR ESSAS DUAS LINHAS DE CIMA PORQUE PODE DEIXAR O SISTEMA VUNERAVEL A ATACK

        //nas linhas de baixo é o masi correto seguindo boas praticas e mais seguro !!
        this._renderer.setStyle(this._elementRef.nativeElement,'background-color','yellow')
        this._renderer.setStyle(this._elementRef.nativeElement,'color','black')

    }
}

