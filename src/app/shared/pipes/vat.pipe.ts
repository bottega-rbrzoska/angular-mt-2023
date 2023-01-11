import { CurrencyPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat'
})
export class VatPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private _locale: string) {}

  transform(value: number, vatPercentage: number, ...currencyArgs: any[]): string {
    const currencyPipe = new CurrencyPipe(this._locale);
    const vatValue: number = (value * vatPercentage) / 100;

    return `${currencyPipe.transform(value + vatValue, ...currencyArgs)} (${currencyPipe.transform(vatValue, ...currencyArgs)}VAT)`;
  }
}
