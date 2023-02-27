import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input('src') src!: string;
  @Input('name') name!: string;
  @Input('time') time!: string;
  @Input('plate') plate!: string;

  //show() {
  // this.showDetail = true;
  //}
  showModal!: boolean;
  registerForm!: FormGroup;
  submitted = false;
  showOverlay = false;

  constructor(private formBuilder: FormBuilder) {}
  show() {
    this.showModal = true;
    this.showOverlay = true; // Show-Hide Modal Check
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
