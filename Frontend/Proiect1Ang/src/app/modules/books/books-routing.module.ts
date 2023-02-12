import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsComponent } from './awards/awards.component';
import { ReadersComponent } from './readers/readers.component';
import { CollectionsComponent } from './collections/collections.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path: 'books',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: '',
    pathMatch: 'full',
    component: BooksComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'book/:id',
    component: BookComponent
  },
  {
    path: 'awards/:id',
    component: AwardsComponent
  },
  {
    path: 'readers/:id',
    component: ReadersComponent
  },
  {
    path: 'collections/:id',
    component: CollectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
