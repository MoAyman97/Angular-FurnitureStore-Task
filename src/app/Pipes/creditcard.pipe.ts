import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard'
})
export class CreditcardPipe implements PipeTransform {

  transform(value: string): string {
    
    let creditCard = value.match(/.{1,4}/g) || []
    
    let after = creditCard.join('-') 
    return after;
  }

}
