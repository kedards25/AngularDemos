import { Component, OnInit } from '@angular/core';
import { products } from '../../models/products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor(
  ) { }

  ngOnInit() {
  }

  share() {
    window.alert('Your product will be shared in while..');
  }

  onNotify() {
    window.alert('You will be notified..');
  }
}
