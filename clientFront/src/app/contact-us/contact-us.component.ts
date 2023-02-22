import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {ContactUsService} from "../services/contactUsService/contact-us.service";

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  constructor(private contactUsService : ContactUsService , private formBuilder:FormBuilder) {
  }

   form = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    }) ;

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  onSubmit() {
    // stop here if form is invalid
    if (this.form.valid) {
      console.log(this.form.value)
       this.contactUsService.sendContactInfos(this.form.value).subscribe(
         res => {
           console.log(Object.keys(res) ) ;

         }
       )
    }
    else{
      console.log("form not valid") ;
    }
  }
}
