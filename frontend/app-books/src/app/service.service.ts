import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private uri = 'http://34.123.46.12';

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(`${this.uri}/books`);
  }
  addBook(book:any){
    return this.http.post(`${this.uri}/books`,book)
  }
}
