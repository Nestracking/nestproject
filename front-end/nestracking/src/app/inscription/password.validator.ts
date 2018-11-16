import { FormControl, FormGroup, NgForm, FormGroupDirective,AbstractControl } from '@angular/forms';

export class PasswordValidator {
  // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
  static areEqual(formGroup: FormGroup) {
    let value;
    let valid = true;
    // console.log('THIS: ',this);
    for (let key in formGroup.controls) {
      console.log("formGroup.controls",formGroup.controls);
      if (formGroup.controls.hasOwnProperty(key)) {
        // console.log('key :', key);
        let control: FormControl = <FormControl>formGroup.controls["password"];
        let confirmControl = <FormControl>formGroup.controls["confirm_password"];
        // console.log('confirmControl',confirmControl.value);
        // console.log("controls: ",formGroup.controls.hasOwnProperty(key));

        if (value === undefined) {
          // console.log('control.value',control.value);
          value = control.value
        } else {
          if (value !== confirmControl.value) {
            valid = false;
            break;
          }
        }
      }
    }

    if (valid) {
      return null;
    }

    return {
      areEqual: true
    };
  }
}