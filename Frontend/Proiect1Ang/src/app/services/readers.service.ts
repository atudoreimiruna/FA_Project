import { Injectable } from '@angular/core';
import { Reader } from '../interfaces/reader';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReadersService {

  public url = 'https://localhost:44335/api/readers';

  constructor( private http: HttpClient ) { }

  public getReaders(id: any) : Observable<Reader[]> {
    return this.http.get<any>(`${this.url}/byId/${id}`);
  }
}



