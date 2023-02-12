import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from './child/child.component';
import { MarksPipe } from 'src/app/marks.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AwardsComponent } from './awards/awards.component';
import { ReadersComponent } from './readers/readers.component';
import { CollectionsComponent } from './collections/collections.component';
import { ProfilePipe } from 'src/app/profile.pipe';
import { PagePipe } from 'src/app/page.pipe';

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    ChildComponent,
    MarksPipe,
    AwardsComponent,
    ReadersComponent,
    CollectionsComponent,
    ProfilePipe,
    PagePipe
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class BooksModule { }
