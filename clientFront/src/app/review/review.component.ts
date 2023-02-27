import { Component, Input } from '@angular/core';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent {
  @Input('name_user') name!: string;
  @Input('src_user') src!: string;
  @Input('title_user') title!: string;
  @Input('review_user') review!: string;
  @Input('rate_user') rate!: number;
  max = 5;

  isReadonly = true;
}
