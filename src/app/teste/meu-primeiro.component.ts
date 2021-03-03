import { Component } from '@angular/core';


// essa parte onde esta escrito selector seria aquela tag customizada que podemos inserir no html
// aqui estamos criando um compomenten com a tag customizada e o templante seria oque iremos inserir no html quando for colocar essa tag custimizada
@Component({
    selector: 'meu-primeiro-component',
    template: `
        <p>Meu primeiro component com Angular 7</p>
    `
})

export class MeuPrimeiroComponent{}