import { Routes } from '@angular/router';
import { AboutComponent } from './myComponents/about/about.component';
import { ContactComponent } from './myComponents/contact/contact.component';
import { HomeComponent } from './myComponents/home/home.component';
import { ProjectsComponent } from './myComponents/projects/projects.component';

export const routes: Routes = [
            {path:'about',component:AboutComponent},
            {path:'contact',component:ContactComponent},
            {path:'home',component:HomeComponent},
            {path:'projects',component:ProjectsComponent}
];
