import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-fetch-details',
  templateUrl: './fetch-details.component.html',
  styleUrls: ['./fetch-details.component.css']
})
export class FetchDetailsComponent implements OnInit {

  userDetails;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.userDetails = this.cartService.getUserData();
  }

}
