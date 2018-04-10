import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const val = value.split('');
    for ( let i = 0; i < val.length; i++){
      const piece = val[i];
      const j = piece.charAt(0).toUpperCase();
      val[i] = j + val[i].substr(1).toLowerCase();
    }
    return val.join('');
  }

}
