import { Component, OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Product} from "../models/Product";
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    products:Product[]=[]

  constructor(private productService:ProductService, private cartService: CartService ) {}
  ngOnInit(){
    this.loadProducts()
  }

  addToCart(product: any) {
    // Добавляем товар в корзину через CartService
    this.cartService.addToCart(product);
    alert(`${product.name} добавлен в корзину!`);
  }
  loadProducts() {
    this.products = []; // Очистка перед загрузкой новых данных
    this.productService.getProducts().subscribe({
        next:(data)=>(this.products=data),
        error:(err)=>console.log('Error get products',err)
    })
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    })}

}