import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class ForNumberPipe implements PipeTransform {

  transform(items: Array<any>, pokemonSearch: string, typeSearch: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (pokemonSearch && item.name.toString().toLowerCase().indexOf(pokemonSearch.toLowerCase()) === -1) {
          return false;
        }
        // if (typeSearch && item.type.type.name.toString().toLowerCase().indexOf(typeSearch.toLowerCase()) === -1) {
        //   return false;
        // }
        return true;
      });
    } else {
      return items;
    }
  }

}

