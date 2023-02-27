import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusDetailsComponent } from './../bus-details/bus-details.component';
import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css'],
})
export class WriteReviewComponent {
  submitreview!: FormGroup;
  review1!: string;
  title1!: string;
  constructor(
    private busDetailsComponent: BusDetailsComponent,
    formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) {
    this.submitreview = formBuilder.group({
      review: ['', Validators.required],
      title: ['', Validators.required],
    });
  }
  max = 5;
  rate = 2;
  isReadonly = false;
  hide() {
    this.busDetailsComponent.showModal = false;
    this.busDetailsComponent.showOverlay = false;
    this.busDetailsComponent.bus1.push({
      name: 'John Smith',
      imagePath: '../assets/img/profile.png',
      rate: this.rate,
      title: this.title1,
      review: this.review1,
    });
  }
  get review() {
    return this.submitreview.get('review');
  }
  get title() {
    return this.submitreview.get('title');
  }
}
