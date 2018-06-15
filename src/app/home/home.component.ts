import { Component,OnInit } from '@angular/core';
import { Book } from './home';
import { Books } from '../books-home';
 import { ServerService } from '../servers.service'
import{ Router } from '@angular/router';
//import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})




export class HomeComponent implements OnInit{
myobj:any[];
// books=Books;
 selectedBook:Book;

constructor(private router:Router,private serverService:ServerService){}


 onSelect(obj:Book): void {
  this.selectedBook = obj;
  console.log(obj)
   this.router.navigate(['/summary',obj.title])
  }

ngOnInit()
{
	this.serverService.getServers().subscribe(res=>
		{
			this.myobj=res.json();
    		console.log(this.myobj);
    		//this.myobj=Object.keys(this.myobj).map(e =>this.myobj[e]);
		}
		);


}



 
 
  }




