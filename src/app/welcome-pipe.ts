import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abc'
})
export class WelcomePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // debugger;
    return 'Welcome ' + value.toUpperCase();
  }

}
