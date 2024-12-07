import { Component } from '@angular/core';
import { AppRoutingModule } from './app.routes'; // Маршрутизация
import { HomeComponent } from './home/home.component'
import { CreateProductComponent } from "./components/create-product/create-product.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
//   imports: [ AppRoutingModule],
  imports: [ HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
