import { not } from '@angular/compiler/src/output/output_ast';
import { okok } from './fisrtFunction';
//import { CicloComponent } from './ciclo.component'

describe('Test Addition of ciclo component', ()=>{

  it('Testing addition function CICLO COMPONENT',()=>{
    expect(okok(10,20)).toBe(30);
    let thanks = okok(30,30)
    console.log("testandooo"+thanks)
  });

});

describe('String matche test',()=>{
    //PODEMOS CRIAR UMA VARIAVEL FORA DO IT PARA QUE OS PROXIMOS ITS POSSAO PEGAR DA MESMA VARIAVEL INVES DE CRIAR UMA VARIAVEL PRA CADA IT

    let kkkk = "look for meee"
    let firstSTR = "Hello world!";
    let firstSTR2 = "Hello world";
    it('Testing String, "TO BE" for matcher ===',()=>{
        expect(firstSTR2).toBe("Hello world");
        //aqui seria a variavel tem que estar exaamaenete igual ao que foi passado no Tobe?
        console.log(firstSTR)
    })

    // PODEMOS COLOCAR O NEGATIVO(NOT)
    it('Testing String, "NOT TO BE" for matcher ===',()=>{
        expect(firstSTR).not.toBe("Hello world");
        //aqui seria a variavel tem que estar exaamaenete igual ao que foi passado no Tobe?
        console.log(firstSTR)
    })

    it('Testing String, "TO EQUAL" for matcher ==',()=>{
        //let firstSTR = "Hello world!";
        expect(firstSTR).toEqual("Hello world!");
    })

    it('Testing String, "NOT TO EQUAL" for matcher ==',()=>{
        //let firstSTR = "Hello world!";
        expect(firstSTR2).not.toEqual("Hello world!");
    })

    it('Testing String, "toContain" check hello present in string',()=>{
        let firstSTR = "Hello world! Welcome to Rundra-Tech-2014";
        expect(firstSTR).toContain("Rundra");
    })

    it('Testing String, "toMatch" matcher is for regular expression',()=>{
        let message = "This 4th lane of Underworld";
        //regular expression to check string contains numbers
        //expect(message).toMatch("/\d+/");
        expect(message).toMatch("Underworld");
    });

    it('Testing "object:numer" numbeeer',()=>{
        let obj = {

        };
        //regular expression to check string contains numbers
        //expect(message).toMatch("/\d+/");
        expect(obj).toMatch("Underworld");
    });

});

//VER COM OS MANOS QUAL A DIFERENCA DO (DESCRIBE) COM E SEM X, pesquisar antes tambem
//ME PARECE QUE it DENTRO DO xdescribe NAO FUNCIONA, MEIO QUE NAO PRINTA NA TELA


xdescribe('Array Test', ()=>{
    xit('Testing Array using toEqual, arrays should be equal')
    let a  = [1,2,3];
    expect(a).toEqual([1,2,3]);

    it('Testing array using toContain (DEF), array should contain')
    let strArr = ['abc','def','xqws'];
    expect(strArr).toContain('def')
});



