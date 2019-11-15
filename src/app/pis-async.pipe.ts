import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pIsAsync'
})
export class PIsAsyncPipe implements PipeTransform {

  transform(catalogo: any[], args?: any): any {
    return catalogo.filter(c => c.isAsync == 0);
  }

}
