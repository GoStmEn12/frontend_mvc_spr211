import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-product',
  standalone:true,
  imports:[FormsModule,RouterModule,CommonModule],
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],

})
export class CreateProductComponent {

  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) {}

  createProduct() {
    this.productService.createProduct(this.product).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
