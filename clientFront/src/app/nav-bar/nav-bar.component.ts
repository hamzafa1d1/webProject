import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  submitted = false;
  showModal!: boolean;
  parentParam= false ;
  onChildParamChange(newValue:boolean){
    this.parentParam = newValue ;
    console.log("changed")
  }
  show() {
    this.showModal = true;
    this.parentParam=true;
  }
}
