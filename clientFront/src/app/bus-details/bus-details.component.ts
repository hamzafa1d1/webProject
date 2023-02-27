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
  isReadonly = true;
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
  @Input('bus_name') bus_name!: string;
  @Input('bus_plate') bus_plate!: string;
  @Input('time') time!: string;

  bus1 = [
    {
      name: 'John Smith',
      imagePath: '../assets/img/profile.png',
      rate: 5,
      title: 'Great bus service!',
      review:
        'I recently used this bus service and I was really impressed! The bus was clean and comfortable, the driver was friendly and professional, and the journey was smooth and hassle-free. I would definitely use this service again and highly recommend it to others.',
    },
    {
      name: 'David Lee',
      rate: 3,
      imagePath: '../assets/img/profile.png',

      title: 'Average service',
      review:
        "The bus was clean and the driver was friendly, but there were some issues with the service. The bus was quite crowded and there wasn't enough space for everyone's luggage. Additionally, the journey took longer than expected due to traffic. Overall, it was an average experience.",
    },
    {
      name: 'Emily Chen',
      rate: 5,
      imagePath: '../assets/img/profile.png',
      title: 'Excellent bus service!',
      review:
        'I was really impressed with this bus service! The bus was modern and comfortable, the driver was knowledgeable and helpful, and the journey was smooth and efficient. I would definitely use this service again and recommend it to others.',
    },
    {
      name: 'Mark Taylor',
      rate: 2,
      title: 'Disappointing experience',
      imagePath: '../assets/img/profile.png',
      review:
        'I had a disappointing experience with this bus service. The bus was old and uncomfortable, the driver was unfriendly and unhelpful, and the journey was delayed due to mechanical issues. I would not recommend this service.',
    },
  ];
  totalrate() {
    let s: number;
    s = 0;
    for (let num of this.bus1) {
      s += num['rate'];
    }
    s = s / this.bus1.length;
    console.log(Math.round(s));
    return Math.round(s);
  }
}
