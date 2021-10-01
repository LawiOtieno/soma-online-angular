import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:any

  constructor(private myBooks:BookService) { }


  getBook(){
    this.myBooks.getBook().subscribe((books)=>{
      console.log(books)
      this.books=books
      
    })
  }

  ngOnInit(): void {
  }

}
