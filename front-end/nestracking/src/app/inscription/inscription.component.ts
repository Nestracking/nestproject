import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
 
  loginForm : FormGroup; 

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({

      user: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.compose([
         Validators.minLength(6),
         Validators.required,
         Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
        ])),
      confirm_password: new FormControl(null, [Validators.required, PasswordValidator.areEqual])

    }, 
    (formGroup: FormGroup) => {
       return PasswordValidator.areEqual(formGroup);
    });
  }
  onSubmit(objValue) { 
    console.log(this.loginForm.valid);
    console.log(objValue);
  }
  getErrorMessage(formControlName : string): string {
    const errors : any= {
      required : "Le champs est requis",
      minlength: "Le champs doit contenir 6 caractères",
      email : "Ce champs doit contenir un email valid",
      areEqual:"Les mots de passe ne corespondent pas"
    }
    return Object.keys(this.loginForm.controls[formControlName].errors).reduce(
      (prev, current, currentIndex) => { 
        console.log(prev);
        console.log(current);
        console.log(currentIndex);
        return `${prev}  ${errors[current]}`;
      },''
    )
       
  }

}
