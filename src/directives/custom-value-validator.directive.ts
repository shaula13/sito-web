import {Directive, Input} from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appCustomValueValidator][formControlName], [appCustomValueValidator][formControl], [customValue][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomValueValidatorDirective, multi: true}]
})
export class CustomValueValidatorDirective implements Validator {
  @Input() customValue: string;

  validate(c: FormControl): {[key: string]: any} {
    const v = c.value;
    return ( v === this.customValue ) ? {'customMin': true} : null;
  }
}
