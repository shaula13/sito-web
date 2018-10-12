import {Directive, Input} from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appCustomMinValidator][formControlName],[appCustomMinValidator][formControl],[customMin][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMinValidatorDirective, multi: true}]
})
export class CustomMinValidatorDirective implements Validator {
  @Input()
  customMin: number;

  validate(c: FormControl): {[key: string]: any} {
      const v = c.value;
      return ( v < this.customMin ) ? {'customMin': true} : null;
  }
}
