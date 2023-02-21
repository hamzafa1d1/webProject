import { BusDetailsComponent } from './../bus-details/bus-details.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css'],
})
export class WriteReviewComponent {
  constructor(private busDetailsComponent: BusDetailsComponent) {}

  max = 5;
  rate = 2;
  isReadonly = false;
  hide() {
    this.busDetailsComponent.showModal = false;
    this.busDetailsComponent.showOverlay = false;
  }
}
