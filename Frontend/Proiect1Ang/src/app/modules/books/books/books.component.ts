import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book} from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { DialogAddEditBookComponent } from '../../shared/dialog-add-edit-book/dialog-add-edit-book.component';
import "@angular/compiler"
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { DialogAddSubscriberComponent } from '../../shared/dialog-add-subscriber/dialog-add-subscriber.component';
import { FeedbackComponent } from '../../shared/feedback/feedback.component';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy{

  public books!: Book[];

  displayedColumns: string[] = ['id', 'name', 'author', 'profile', 'delete'];
  public parentMessage = 'message from parent';
  public message: any;
  public subscription!: Subscription;

  constructor(
    private booksService: BooksService,
    private router: Router,
    private dialog: MatDialog,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe( message => this.message = message);
    this.getAllBooks();
  }

  public getAllBooks(): void {
    this.booksService.getBooks().subscribe((result) => {
      this.books = result;
    });
  }

  public addData(book?: any) : void {
    const data = {
      book 
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '600px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(DialogAddEditBookComponent, dialogConfig);
    dialogRef.afterClosed().subscribe( (result) => {
      if ( result ) {
        this.getAllBooks();
      }
    });
    }

    public addSubscriber(subscriber?: any) : void {
      const data = {
        subscriber 
      };
      
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '550px';
      dialogConfig.height = '600px';
      dialogConfig.data = data;
      const dialogRef = this.dialog.open(DialogAddSubscriberComponent, dialogConfig);
      dialogRef.afterClosed().subscribe( (result) => {
        if ( result ) {
          this.getAllBooks();
        }
      });
    }

    public addFeedback(feedback?: any) : void {
      const data = {
        feedback 
      };
      
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '550px';
      dialogConfig.height = '600px';
      dialogConfig.data = data;
      const dialogRef = this.dialog.open(FeedbackComponent, dialogConfig);
      dialogRef.afterClosed().subscribe( (result) => {
        if ( result ) {
          this.getAllBooks();
        }
      });
    }
  
  public goToBookProfile(id: any) : void {
    this.router.navigate(['/book', id]);
  }

  public editBook(book: any) : void {
    this.addData(book);
  }
  
  public deleteBook(id: any) : void {
    window.location.reload();
    this.booksService.deleteBook(id).subscribe( (result) => {
      if ( result ) {
        this.getAllBooks();
      }
    }); 
  }

  public receiveMessage(message: any): void {
    console.log(message);
  }

  public logout() : void {
    this.data.changeMessage('Hello from Books');
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

