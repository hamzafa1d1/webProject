import { Component, Input } from '@angular/core';

@Component({
  selector: 'bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css'],
})
export class BusDetailsComponent {
  @Input('title') title!: string;
  log() {
    console.log('works');
  }
  max = 5;
  rate = 2;
  isReadonly = false;
}
