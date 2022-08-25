import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ribbonLabel',
})
export class RibbonLabelPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    // need to have current selected category here to verify which label is correct
    // if(currentLabel === 'new') {
    //   return 'TOP'
    // }

    // if(currentLabel === 'top') {
    //   return 'NEW'
    // }

    return 'Label need to handel ';
  }
}
