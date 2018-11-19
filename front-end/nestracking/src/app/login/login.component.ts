import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { JwtValidatorService } from '../jwt-validator.service';
import { HTTPRequestService } from '../httprequest.service';
import { Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup; 
  

  constructor(private httprequest: HTTPRequestService, private router: Router, private jwtService: JwtValidatorService) {

  }

  ngOnInit() {
   
    this.loginForm = new FormGroup({
      user: new FormControl(null, Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.required,
      ])),
    
      password: new FormControl(null, Validators.compose([
         Validators.minLength(5),
         Validators.required,
      ])),
      
      
    });
  }

  onSubmit(objValue) { 
    this.httprequest.UserConnect(objValue).subscribe( response => { 
      

      console.log('RPS LOGIN:',response);
      const storage: any = response;
      localStorage.setItem('JWT', storage)
      this.jwtService.authenticate()
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
