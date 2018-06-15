import { Component } from '@angular/core';
import { FormBuilder ,FormGroup ,Validators } from '@angular/forms';
import { ServerService } from './servers.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 rForm:FormGroup;
 post:any;
 description:string='';
 name:string='';
 titleAlert:string='Name is required'
 email:string='';
constructor(private fb:FormBuilder,private serverService:ServerService)
 { 
 	 this.rForm=fb.group({
 	'name':[null, Validators.required],
 	'email':[null,Validators.compose([Validators.required,Validators.email])],
 	'description':[null, Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(500)])],
 	'validate':''
 });
 }




ngOnInit()
{
	this.rForm.get('validate').valueChanges.subscribe(
	(validate)=> {
		if(validate=='1')
		{
			this.rForm.get('name').setValidators([Validators.minLength(3)]);
			this.titleAlert="You need to specify atleast three characters";
		}
		else{
			this.rForm.get('name').setValidators([Validators.required]);
		}
		this.rForm.get('name').updateValueAndValidity();
	}

	)
}

 addPost(post)

{
	this.description=post.description;
	this.name=post.name;
    this.serverService.storeServers(post)
	.subscribe(
		(response)=>console.log(response),
		(error)=> console. log(error)
		);
}

  isNavbarCollapsed = true;

}
