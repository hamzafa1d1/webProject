import { ProductComponent } from './../product/product.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css'],
})
export class BusDetailsComponent {
  constructor(private productComponent: ProductComponent) {}
  @Input('title') title!: string;
  static showModal: boolean;
  static showOverlay: boolean;
  log() {
    console.log('works');
  }
  max = 5;
  rate = 2;
  isReadonly = false;
  showModal!: boolean;
  showOverlay = false;
  hide() {
    this.productComponent.showModal = false;
    this.productComponent.showOverlay = false;
  }
  show1() {
    this.showModal = true;
    this.showOverlay = true; // Show-Hide Modal Check
  }
}
