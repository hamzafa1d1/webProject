import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import{Location} from '@angular/common'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{SignUpService} from 'src/app/services/Singup/sign-up.service'

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  showModal!: boolean;
  registerForm!: FormGroup;
  loginForm!: FormGroup;
  submitted = false;
  _childParam!: boolean ;

  isLoggedin?: boolean = undefined;
  @Input() set childParam(value:boolean){
    this._childParam = value ;
  }
  @Output() childParamChange = new EventEmitter<boolean>();
  constructor(formBuilder: FormBuilder  , private  location: Location , private signUpSerivce : SignUpService) {
    this.registerForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }



  hide() {
    this._childParam= false ;
    this.childParamChange.emit(this._childParam);
  }

  // convenience getter for easy access to form fields
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get FirstName() {
    return this.registerForm.get('firstName');
  }
  get LastName() {
    return this.registerForm.get('lastName');
  }
  get loginemail() {
    return this.loginForm.get('email');
  }
  get loginpassword() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted) {
      this.showModal = false;
    }
  }
  switch1 = true;
  switchfn() {
    this.switch1 = !this.switch1;
  }
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  Registration() {
    if(this.registerForm.valid){
      this.signUpSerivce.signUp(this.registerForm.value).subscribe(
        res =>{
          console.log(res) ;
          localStorage.setItem("token" , Object.values(res).toString()) ;
      }
      )
    }
  }
}
