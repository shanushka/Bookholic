import { Component,Input} from '@angular/core';
 import { Book } from '../home/home';
 import {Books } from '../books-home';
//import { Books } from '../books-home';
import { ActivatedRoute } from '@angular/router'
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
 public selectedTitleName:string;
  constructor(private route:ActivatedRoute)
 { 
this.selectedTitleName =route.snapshot.params['title'];

	this.findItem(this.selectedTitleName);
}
  books=Books;
 //@Input() selectedBook:Book;

 displayItem: any;

private findItem(book: string) {

	for(let i = 0; i < this.books.length; i++) {
		if (this.books[i]['title']==book) {
			this.displayItem = this.books[i];
		}
	}
}


}

