import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent  implements OnInit {
  loggedIn : boolean| undefined ;
  loaded= false ;
   ngOnInit () {
    console.log("hello")

     if((localStorage.getItem('token'))) {
       const currentUser = JSON.parse(localStorage.getItem('token') ?? '');
       this.loggedIn = true;
       console.log(Object.keys(currentUser))
     }
     else{
       this.loggedIn = false;

     }
     this.loaded = true;

  }

  constructor() {
    // let currentUser = this.facebookAccountService.getUser() ;
    //   console.log("user") ;
    //   console.log(currentUser)
  }

  submitted = false;
  showModal!: boolean;
  parentParam= false ;
  onChildParamChange(newValue:boolean){
    this.parentParam = newValue ;
    console.log("changed")
  }
  signOut(): void {
    // this.authService.signOut();

  }
  show() {
    this.showModal = true;
    this.parentParam=true;
  }
}
