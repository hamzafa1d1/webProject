import { Component } from '@angular/core';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent {
  max = 5;
  rate = 2;
  isReadonly = false;
}
