// criando uma ainterface para o hero

export interface Hero {
    id: number;
    name: string;
  }


export class Negociacao{
    data: number
    quantidade: number
    valor:number
    constructor(data: number,quantidade: number,valor:number){
        // if(data != 30){
        //     throw new Error("Data deve ser peenchida")
        // }
    this.data = data
    this.quantidade = quantidade
    this.valor = valor
    }
    
}

//aqui estamos exportado uma variavel do tipo array , assim podendo usar o ngfor para exibir na interface
export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];