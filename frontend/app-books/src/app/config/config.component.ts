import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  public book: any = {
    name: '',
    editorial:'',
    category:'',
    author:'',
    isbn:'',
    year:0,
    price: 0.0,
    img:''
  };

  constructor(private service: ServiceService,private  router:Router) { }

  ngOnInit(): void {
  }
  async addBook(){
    //console.log(this.book)
    await this.service.addBook(this.book).subscribe(
      (res:any) => {
        //console.log("libro agregado", res)
        this.router.navigate(['/'])
      }
    );
  }

}
