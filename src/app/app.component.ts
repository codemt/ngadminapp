import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userImage: string;


  constructor() {

    this.userImage = '/assets/dist/img/avatar.png';

  }
  title = 'app';
}
