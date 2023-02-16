import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  submitted = false;
  showModal!: boolean;
  showOverlay = false;
  show() {
    this.showModal = true;
    this.showOverlay = true; // Show-Hide Modal Check
  }
}
