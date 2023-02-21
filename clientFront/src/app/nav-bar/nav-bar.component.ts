import { Component } from '@angular/core';
import {SocialAuthService, SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private authService: SocialAuthService) {
    this.authService.authState.subscribe((user: SocialUser | null) => {
      if (user != null) {
        // The user is logged in
        console.log('Logged in as: ' + user.name);
      } else {
        // The user is not logged in
        console.log('Not logged in');

      }
    })
  }

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
