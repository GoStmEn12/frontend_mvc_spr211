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

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { CreateProductComponent } from './components/create-product/create-product.component';
// import { UpdateProductComponent } from './components/update-product/update-product.component';
// import { ProductDetailsComponent } from './components/product-details/product-details.component';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent }, // Главная страница
//   { path: 'create', component: CreateProductComponent }, // Страница добавления
//   { path: 'details/:id', component: ProductDetailsComponent }, // Страница деталей
//   { path: 'update/:id', component: UpdateProductComponent }, // Страница обновления
// ];

// @NgModule({
//     declarations: [
//       AppComponent,       // Главный компонент
//       HomeComponent,      // Компонент для главной страницы
//       CreateProductComponent,    // Компонент для добавления продукта
//       ProductDetailsComponent,   // Компонент для деталей продукта
//       UpdateProductComponent,    // Компонент для обновления продукта
//     ],
//     imports: [
//       BrowserModule,      // Обязательный модуль для браузерных приложений
//       FormsModule,        // Для работы с формами
//       RouterModule.forRoot(appRoutes), // Настройка маршрутов
//     ],
//     providers: [],
//     bootstrap: [AppComponent], // Указывает главный компонент
//   })
//   export class AppRoutingModule {}