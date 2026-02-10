import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Aboutus } from './aboutus/aboutus';
import { Contactus } from './contactus/contactus';

export const routes: Routes = [
    {path:'home', component: Dashboard, title:'Home Page'},
    {path:'aboutus', component: Aboutus, title:'About Page'},
    {path:'contactus', component: Contactus, title:'Contact Page'}
];
