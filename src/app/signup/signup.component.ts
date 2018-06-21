import { Component, OnInit } from '@angular/core';
import {ServerService} from '../servers.service';
import { FormBuilder ,FormGroup ,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

 
export class SignupComponent  {
uForm:FormGroup;
  constructor(private fb:FormBuilder,private serverService:ServerService) {

  	this.uForm=fb.group({


 	'firstname':[null, Validators.required],
 	'lastname':[null,Validators.required],
 	'email':[null,Validators.compose([Validators.required,Validators.email])],
 	/*'description':[null, Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(500)])],
 	'validate':''*/
 	'password':[null,Validators.required]
 	
 });

   }



 addSignUp(post)

{
	//this.description=post.description;

    this.serverService.storeSignup(post)
	.subscribe(
		
		);
}
}