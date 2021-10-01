import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private readonly shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  public addToCart(): void {
    this.shoppingCartService.addToCart();
  }
}
