import { Component, Input } from '@angular/core';

@Component({
  selector: '*members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent {
  @Input('src')
  src!: String;
}
