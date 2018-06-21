import {ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import  { SummaryComponent } from'./summary/summary.component';
import { SignupComponent } from './signup/signup.component';

export const router:Routes =[
{	
	path: '',
	component:HomeComponent
   
},
{   path:'summary/:title' ,component:SummaryComponent },
{   path:'about',component:AboutComponent   },
{   path:'contact',component:ContactComponent },
{  path:'signin',component:SigninComponent    },
 {  path:'summary',component:SummaryComponent},
 {
 	path:'signup',component:SignupComponent
 }

];
 export const routes:ModuleWithProviders=RouterModule.forRoot(router);