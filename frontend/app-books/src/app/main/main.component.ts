import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public books: any = [];
  public book: any;


  constructor(private service: ServiceService) { 
    this.loadData();
  }

  ngOnInit(): void {

  }
  
  async loadData() {
    await this.service.getBooks().subscribe((res) => {
      //console.log('books', res);
      this.books = res;
    });
  }
  loadBook(b: any) {

    // this.tranfer.accountOrigin.account = '';
    // this.tranfer.accountOrigin.organisation = '';

    //console.log(m);
    this.book = b;
  
   
  }

}
