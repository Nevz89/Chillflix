import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakWord'
})
export class BreakWordPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.slice(0, 25);
  }

}
