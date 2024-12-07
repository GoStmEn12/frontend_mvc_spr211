import { Routes,RouterModule, provideRouter } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CommonModule } from '@angular/common';

  export const routes: Routes = [
    { path: '', component: HomeComponent }, // Главная страница
    { path: 'create', component: CreateProductComponent }, // Создание продукта
    { path: 'update-product/:id', component: UpdateProductComponent }, // Редактирование продукта
    { path: 'details/:id', component: ProductDetailsComponent }, // Детали продукта
];

@NgModule({
    imports: [RouterModule.forRoot(routes),FormsModule,CommonModule],
    exports: [RouterModule,FormsModule,CommonModule],
    providers: [provideRouter(routes)],
  })
  export class AppRoutingModule {}
