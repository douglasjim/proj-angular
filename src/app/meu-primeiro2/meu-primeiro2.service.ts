import { Injectable } from '@angular/core';


@Injectable()
export class Meuprimeiro2Service{


    constructor(){

    }

    teste: number = 10

    getCursos(){
        return ['Java','Douglas','AngulrJS','OPAA'];
    }

    

}