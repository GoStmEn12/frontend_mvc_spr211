import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  // Добавляем товар в корзину
  addToCart(product: any) {
    this.cart.push(product);
  }

  // Получаем все товары из корзины
  getCart() {
    return this.cart;
  }

  // Очищаем корзину
  clearCart() {
    this.cart = [];
  }
}
