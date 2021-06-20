import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

const baseUrl = environment.baseUri;


@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private uri = baseUrl;

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(`${this.uri}/books`);
  }
  addBook(book: any) {
    return this.http.post(`${this.uri}/books`, book);
  }
}
