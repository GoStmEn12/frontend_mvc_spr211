import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone:true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Получаем товары из корзины
    this.cartItems = this.cartService.getCart();
  }

  clearCart() {
    // Очищаем корзину
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
