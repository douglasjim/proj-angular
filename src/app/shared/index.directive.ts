import { CicloComponent } from './../ciclo/ciclo.component';
import { Directive,ElementRef,Renderer2,Input } from "@angular/core";


@Directive({
    selector: '[default]',
})

export class DefaultFull{

    

    @Input() defaultt: number = 0

    constructor(){

    }
}

