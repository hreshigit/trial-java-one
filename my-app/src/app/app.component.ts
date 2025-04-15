import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { AboutComponent } from './myComponents/about/about.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,RouterModule,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-app';
}
