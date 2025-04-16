import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { AboutComponent } from './myComponents/about/about.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,RouterModule,AboutComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-app';



}
