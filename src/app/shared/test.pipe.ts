import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {
  transform(value: string, prefix: string): string {
    return `${prefix} ${value}`; //  => prefix + ' ' + value
  }
}
