import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-dialog-add-edit-book',
  templateUrl: './dialog-add-edit-book.component.html',
  styleUrls: ['./dialog-add-edit-book.component.scss']
})
export class DialogAddEditBookComponent implements OnInit {

  public title: string;
  public bookForm : FormGroup = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    id: new FormControl(0)
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    public dialogRef: MatDialogRef<DialogAddEditBookComponent>,
    private booksService: BooksService
  ) {
    console.log(this.data);
    if ( this.data.book ) {
      this.bookForm.patchValue(this.data.book);
      this.title = 'Edit Book';
    }
    else {
      this.title = 'Add Book';
    }
  }

  get name() : AbstractControl | null {
    return this.bookForm.get('name');
  }

  get gender() : AbstractControl | null {
    return this.bookForm.get('author');
  }

  get id() : AbstractControl | null {
    return this.bookForm.get('id');
  }

  ngOnInit(): void {
  }


  public closeDialog() : void {
    this.dialogRef.close();
  }

  public saveData() : void {
    console.log(this.bookForm.value);
    this.booksService.createBook(this.bookForm.value).subscribe( () => {
      this.dialogRef.close(this.bookForm.value);
    });
  }
 
}


