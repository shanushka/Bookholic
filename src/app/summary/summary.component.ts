import { Component,Input,OnInit} from '@angular/core';
 import { ServerService } from '../servers.service'
import { Book } from '../home/home';
import { ActivatedRoute } from '@angular/router'
import { HomeComponent } from '../home/home.component';
import{ Router } from '@angular/router';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
 public selectedTitleName:string;
  constructor(private route:ActivatedRoute,private router:Router,private serverService:ServerService)
 { 
	
	this.selectedTitleName =route.snapshot.params['title'];

	
}

 //@Input() selectedBook:Book;

 displayItem: Book = new Book();
books:any[]
ngOnInit()
{

	this.serverService.getServers().subscribe(res=>
		{
			this.books=res.json();
		//	console.log(this.books);
    		this.findItem(this.selectedTitleName);
    		//this.myobj=Object.keys(this.myobj).map(e =>this.myobj[e]);
		}
		);


}
private findItem(book: string) {

	
		console.log(this.books);
		this.books.forEach(
			value=>{
				if(value.Title==book)
				{
					this.displayItem = value;
				}
			})
	// for(let i = 0; i < this.books.length; i++) {
	// 	if (this.books[i].Title==book) {
	// 		this.displayItem = this.books[i];
	// 	}
	// }
}


}

