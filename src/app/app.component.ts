import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hoi guys';
  msg = 'Blabla';
  nrPuppy = '1'; 

  getPuppy() {
    return 'assets/images/puppy' + this.nrPuppy + '.jpeg';
  }
}
