import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(private client: HttpClient) { }

  addToCart(product) {
    console.log('addToCart from cart Service');
    console.log(this.items);
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.client.get('assets/shipping.json');
  }

  getUserData() {
    return this.client.get('http://localhost:8080/users');
  }
}
