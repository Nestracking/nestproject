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
      password: new FormControl('', Validators.compose([
         Validators.minLength(5),
         Validators.required,
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
       return PasswordValidator.areEqual(formGroup);
    });
    
  }


  onSubmit(objValue) { 
    console.log(this.loginForm.valid);
    console.log('objValue',objValue);
  }
  getErrorMessage(formControlName : string): string {
    const errors : any= {
      required : "Le champs est requis",
      minlength: "Le champs doit contenir 6 caractères",
      email : "Ce champs doit contenir un email valide",
      areEqual:"Les mots de passe ne corespondent pas"
    }
    return Object.keys(this.loginForm.controls[formControlName].errors).reduce(
      (prev, current, currentIndex) => {

        return `${errors[current]}`;
      },''
    )
       
  }

}


