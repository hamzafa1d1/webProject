import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  showModal!: boolean;
  parentParam = false ;
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder ) {}

  onChildParamChange(newValue:boolean){
    this.parentParam = newValue ;
    console.log("changed")
  }
  show() {
    this.parentParam=true;
    this.showModal = true;

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  // convenience getter for easy access to form fields
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
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
}
