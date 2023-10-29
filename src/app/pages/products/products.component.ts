import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('http://localhost:4000/api/v1/products').subscribe((res) => {
      console.log(res);
    });
  }
}
