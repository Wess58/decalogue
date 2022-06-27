import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlTitle'
})
export class UrlTitlePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.trim().toLowerCase().replace(/,/g,'').split(' ').join('-');
  }

}
