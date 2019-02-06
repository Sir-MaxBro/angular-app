import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  pure: true
})
export class PricePipe implements PipeTransform {
  transform(value: number) {
    return `${value}$`;
  }
}
