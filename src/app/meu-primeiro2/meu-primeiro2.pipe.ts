import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})

export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split(' ')
    let result = '';

    for(let v of values){
      result = result + this.capitalize(v) + ' ';
    }

    return result;
  }

    capitalize(value: String){
      return value.substr(0,1).toUpperCase() + value.substr(1).toLowerCase(); 
  }
}