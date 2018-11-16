import { FormControl, FormGroup, NgForm, FormGroupDirective,AbstractControl } from '@angular/forms';

export class PasswordValidator {
  // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
  // Récupération valeur des inputs du form d'inscription
  // Compare password et confirm_password
  // créer dans formGroup._parent.errors 1 objet {areEqual:true}
  static areEqual(formGroup: FormGroup) {
    let value;
    let valid = true;

    for (let key in formGroup.controls) {

      if (formGroup.controls.hasOwnProperty(key)) {

        let control: FormControl = <FormControl>formGroup.controls["password"];
        let confirmControl = <FormControl>formGroup.controls["confirm_password"];

        if (value === undefined) {

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