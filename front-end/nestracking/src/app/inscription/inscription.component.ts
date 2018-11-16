import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { PasswordValidator } from './password.validator';
import { HTTPRequestService } from '../httprequest.service';
import { Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
 
  loginForm : FormGroup; 
  parent: AbstractControl;
  // equal;
  constructor(private httprequest: HTTPRequestService, private router: Router) {

  }

  ngOnInit() {
   
    this.loginForm = new FormGroup({
      user: new FormControl(null, Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.required,
      ])),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.compose([
         Validators.minLength(5),
         Validators.required,
      ])),
      
      confirm_password: new FormControl(null,Validators.required)
    }, (formGroup: FormGroup) => {
           
       return PasswordValidator.areEqual(formGroup);
    });
  }

  onSubmit(objValue) { 
    this.httprequest.UserCreate(objValue).subscribe( response => { 
      let rep: any = response;
      if(rep.Send.length === 38){
        alert(rep.Send)
        let accueil :string = '/'
        this.router.navigate([accueil])
      } else {
         alert(rep.Error);
      }
    })
  }
  getErrorMessage(formControlName : string): string {
    const errors : any= {
      required : "Le champs est requis",
      minlength: "Le champs doit contenir 6 caractères",
      maxlength : "Le champs ne peu contenir plus de 25 caractères",
      email : "Ce champs doit contenir un email valide",
      areEqual:"Les mots de passe ne corespondent pas",
      
    }
    if(formControlName === 'confirm_password'){
      // console.log('object', this.loginForm.controls['confirm_password'].valid);
    }
    return Object.keys(this.loginForm.controls[formControlName].errors).reduce(
      (prev, current, currentIndex) => {
        return `${errors[current]}`;
      },''
      )

  }
}


