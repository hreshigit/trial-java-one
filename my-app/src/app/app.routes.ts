import { Routes } from '@angular/router';
import { AboutComponent } from './myComponents/about/about.component';
import { ContactComponent } from './myComponents/contact/contact.component';

export const routes: Routes = [
            {path:'about',component:AboutComponent},
            {path:'contact',component:ContactComponent}
];
