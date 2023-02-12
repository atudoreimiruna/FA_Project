import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public url = 'https://localhost:44335/api/Books';
  
  constructor(
    private http: HttpClient
  ) { }

  public getBooks() : Observable<Book[]> {
    return this.http.get<any>(this.url);
  }

  public getBookById(id: any): Observable<Book> {
    return this.http.get<any>(`${this.url}/byId/${id}`);
  }

  public createBook(body: { id: number; name: string; author: string; }): Observable<any> {

    return this.http.post<any>(`${this.url}/fromBody`, body);
  }
  
  public deleteBook(id: any): Observable<Book> {
   return this.http.delete<any>(`${this.url}/${id}`);
  }
  
  public editBook(body: { id: number; name: string; }): Observable<any> {
    return this.http.put<any>(`${this.url}`, body);
  }
}
