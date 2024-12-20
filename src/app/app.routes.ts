///РАБОЧИЙ КОД ДО РЕГИСТРАЦИИИ ////////////////

// import { Routes,RouterModule, provideRouter } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HomeComponent } from './home/home.component';
// import { CreateProductComponent } from './components/create-product/create-product.component';
// import { UpdateProductComponent } from './components/update-product/update-product.component';
// import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { CommonModule } from '@angular/common';

//   export const routes: Routes = [
//     { path: '', component: HomeComponent }, // Главная страница
//     { path: 'create', component: CreateProductComponent }, // Создание продукта
//     { path: 'update-product/:id', component: UpdateProductComponent }, // Редактирование продукта
//     { path: 'details/:id', component: ProductDetailsComponent }, // Детали продукта
// ];


// @NgModule({
//     imports: [RouterModule.forRoot(routes),FormsModule,CommonModule],
//     exports: [RouterModule,FormsModule,CommonModule],
//     providers: [provideRouter(routes)],
//   })
//   export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes,provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import{CartComponent}from './cart/cart.component'

// Guards
import { AuthGuard } from './guards/auth.guard';

// export const routes: Routes = [
//     {path: '', component:HomeComponent, pathMatch:'full', canActivate: [AuthGuard]},
//     {path: 'login', component:LoginComponent},
//     {path: 'products', component:HomeComponent, canActivate: [AuthGuard]},
//     {
//         path: 'products', component:HomeComponent, canActivate: [AuthGuard],
//       children: [
//         {path: 'create', component: CreateProductComponent, canActivate: [AuthGuard] }, // Создание продукта
//         {path: 'details/:id', component: ProductDetailsComponent,canActivateChild: [AuthGuard],},
//         {path: 'update-product/:id', component: UpdateProductComponent, canActivate: [AuthGuard] }, // Редактирование
//       ]
//     },

//     {path: '**', component:HomeComponent, pathMatch:'full', canActivate: [AuthGuard]}
//   ];

export const routes: Routes = [
  // Авторизация и регистрация
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Защищённые маршруты для продуктов
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }, // Главная страница
  { path: 'create', component: CreateProductComponent, canActivate: [AuthGuard] }, // Создание продукта
  { path: 'update-product/:id', component: UpdateProductComponent, canActivate: [AuthGuard] }, // Редактирование
  { path: 'details/:id', component: ProductDetailsComponent, canActivate: [AuthGuard] }, // Детали продукта
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  // По умолчанию перенаправление на главную
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
        imports: [RouterModule.forRoot(routes),FormsModule,CommonModule],
        exports: [RouterModule,FormsModule,CommonModule],
       // providers: [provideRouter(routes)],
      })
      export class AppRoutingModule {}
