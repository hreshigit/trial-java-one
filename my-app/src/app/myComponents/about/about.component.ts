import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  inputText = '';
  dummyText = ''
  clicked: boolean = false;
  onClickedd() {
    if (!this.clicked) {
      this.dummyText = ' clicked'
      this.clicked = true;
    }
    else {
      this.dummyText = 'un clicked'
      this.clicked = false;
    }

  }




}


/*

@Component({
  template: `
    <p>Your color preference is {{ theme }}.</p>
  `,
  ...
})
export class AppComponent {
  theme = 'dark';
}

*/
