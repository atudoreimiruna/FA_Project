import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { DataService } from 'src/app/services/data.service';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit, OnDestroy {

  public id: Number | undefined;
  public sub : any;
  public book!: Book;

  constructor(
    private route : ActivatedRoute,
    private bookService : BooksService,
    private router: Router,
    private data: DataService
     ) { }

  public ngOnInit(): void {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
        if (this.id) {
          this.getBook();
        }
    })
  }

  public getBook() : void {
      this.bookService.getBookById(this.id).subscribe( (result) => {
        this.book = result;
        console.log(this.book);
      })
    }

  public ngOnDestroy(): void {
      this.sub.unsubscribe();
    };

  public getAllAwards(id : any) : void {
    this.router.navigate(['/awards', id]);
  }

  public getAllReaders(id: any) : void {
    this.router.navigate(['/readers', id]);
  }

  public getAllCollections(id: any) : void {
    this.router.navigate(['/collections', id]);
  }
}
