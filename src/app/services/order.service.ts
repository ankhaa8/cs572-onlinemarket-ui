import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() { 
    let token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    }
    return this.http.get<any>('http://localhost:3000/orders', header);
  }

}
