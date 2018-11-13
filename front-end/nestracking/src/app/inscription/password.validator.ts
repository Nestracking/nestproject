import { FormControl, FormGroup, NgForm, FormGroupDirective } from '@angular/forms';

export class PasswordValidator {
  // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
  static areEqual(formGroup: FormGroup) {
    console.log(formGroup);
    let mdp;
    let mdpc;
    let valid = true;
    
    for (let key in formGroup.controls) {
 if(key === "password" && formGroup.controls[key] !== undefined){
mdp = formGroup.controls[key].value;
console.log(mdp);
 }
 if(key === "confirm_password" && formGroup.controls[key] !== undefined){
   mdpc = formGroup.controls[key].value;
   console.log(mdpc);
 }
    }

if(mdpc === mdp && mdp !== undefined){
  valid = true;
}else{
  valid = false;
}

console.log(valid);



    return {
      areEqual: true
    };
  }
}
