/*
// import { Injectable } from '@angular/core';
// import { Product } from '../models/Product';
// import { Observable, switchMap, catchError, throwError } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { AuthService } from './auth.service';
// import { User } from '../models/User';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductService {
//   private url: string = 'https://localhost:7255/api/apiproducts';

//   constructor(
//     private http: HttpClient,
//     private authServices: AuthService
//   ) {}

//   // Universal function for auth
//   private withAuth<T>(
//     callback: (headers: HttpHeaders) => Observable<T>
//   ): Observable<T> {
//     const user = new User();
//     user.email = 'password1234@gmail.com';
//     user.password = '1234';

//     return this.authServices.getToken(user).pipe(
//       switchMap((response) => {
//         const headers = new HttpHeaders({
//           Authorization: `Bearer ${response.token}`, // Исправлено
//         });
//         return callback(headers);
//       }),
//       catchError((error) => {
//         console.error('Authentication failed:', error);
//         return throwError(() => error); // Передача ошибки дальше
//       })
//     );

//   }


//   // Create
//   createProduct(product: Product): Observable<any> {
//     return this.withAuth((headers) =>
//       this.http.post(this.url, product, { headers })
//     );
//   }

//   // Read all
//   getProducts(): Observable<any[]> {
//     return this.withAuth((headers) =>
//       this.http.get<any[]>(this.url, { headers })
//     );
//   }

//   // Read by Id
//   getProductById(id: number): Observable<any> {
//     return this.withAuth((headers) =>
//       this.http.get<any>(`${this.url}/${id}`, { headers }) // Исправлено
//     );
//   }

//   // Update
//   updateProduct(id: number, product: Product): Observable<any> {
//     return this.withAuth((headers) =>
//       this.http.put(`${this.url}/${id}`, product, { headers }) // Исправлено
//     );
//   }

//   // Delete
//   deleteProduct(id: number): Observable<any> {
//     return this.withAuth((headers) =>
//       this.http.delete(`${this.url}/${id}`, { headers }) // Исправлено
//     );
//   }
// }

*/
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable, switchMap, catchError, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = 'https://localhost:7255/api/apiproducts';

  constructor(
    private http: HttpClient,
    private authServices: AuthService
  ) {}

  // Универсальная функция для аутентификации
  private withAuth<T>(
    callback: (headers: HttpHeaders) => Observable<T>
  ): Observable<T> {
    const user = {
      email: 'password1234@gmail.com',
      password: '1234',
    };

    return this.authServices.getToken(user).pipe(
      switchMap((response: AuthResponse) => {
        if (response?.token) {
          const headers = new HttpHeaders({
            Authorization: `Bearer ${response.token}`,
          });
          return callback(headers);
        } else {
          throw new Error('Token is null or undefined');
        }
      }),
      catchError((error) => {
        console.error('Authentication failed:', error);
        return throwError(() => error);
      })
    );
  }

  // Создать продукт
  createProduct(product: Product): Observable<any> {
    return this.withAuth((headers) =>
      this.http.post(this.url, product, { headers })
    );
  }

  // Получить все продукты
  getProducts(): Observable<Product[]> {
    return this.withAuth((headers) =>
      this.http.get<Product[]>(this.url, { headers })
    );
  }

  // Получить продукт по ID
  getProductById(id: number): Observable<Product> {
    return this.withAuth((headers) =>
      this.http.get<Product>(`${this.url}/${id}`, { headers })
    );
  }

  // Обновить продукт
  updateProduct(id: number, product: Product): Observable<any> {
    return this.withAuth((headers) =>
      this.http.put(`${this.url}/${id}`, product, { headers })
    );
  }

  // Удалить продукт
  deleteProduct(id: number): Observable<any> {
    return this.withAuth((headers) =>
      this.http.delete(`${this.url}/${id}`, { headers })
    );
  }
}
