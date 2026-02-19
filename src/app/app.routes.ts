import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Aboutus } from './aboutus/aboutus';
import { Contactus } from './contactus/contactus';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Login } from './login/login';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    // {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'', component: Dashboard}, //other way but home not shong in url
    {path:'home', component: Dashboard, title:'Home Page'},
    {path:'aboutus', component: Aboutus, title:'About Page', canActivate:[authGuard]},
    {path:'contactus', component: Contactus, title:'Contact Page', canActivate:[authGuard]},
    {path:'aboutusnew', component:Aboutus, outlet:'outlet2'},
    {path:'aboutusnew/:id', component:Aboutus, outlet:'outlet2'},
    {path:'login', component:Login, title:'Login Page'},
    {path:'**', component: Pagenotfound, title:'Page not found!'},


];
