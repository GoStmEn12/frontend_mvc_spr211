import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable, switchMap, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = 'https://localhost:7255/api/apiproducts';

  constructor(
    private http: HttpClient,
    private authServices: AuthService
  ) {}

  // Universal function for auth
  private withAuth<T>(
    callback: (headers: HttpHeaders) => Observable<T>
  ): Observable<T> {
    const user = new User();
    user.email = 'password1234@gmail.com';
    user.password = '1234';

    return this.authServices.getToken(user).pipe(
      switchMap((response) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${response.token}`, // Исправлено
        });
        return callback(headers);
      }),
      catchError((error) => {
        console.error('Authentication failed:', error);
        return throwError(() => error); // Передача ошибки дальше
      })
    );
  }

  // Create
  createProduct(product: Product): Observable<any> {
    return this.withAuth((headers) =>
      this.http.post(this.url, product, { headers })
    );
  }

  // Read all
  getProducts(): Observable<any[]> {
    return this.withAuth((headers) =>
      this.http.get<any[]>(this.url, { headers })
    );
  }

  // Read by Id
  getProductById(id: number): Observable<any> {
    return this.withAuth((headers) =>
      this.http.get<any>(`${this.url}/${id}`, { headers }) // Исправлено
    );
  }

  // Update
  updateProduct(id: number, product: Product): Observable<any> {
    return this.withAuth((headers) =>
      this.http.put(`${this.url}/${id}`, product, { headers }) // Исправлено
    );
  }

  // Delete
  deleteProduct(id: number): Observable<any> {
    return this.withAuth((headers) =>
      this.http.delete(`${this.url}/${id}`, { headers }) // Исправлено
    );
  }
}

/*
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private token: string = '';
  private url: string = 'https://localhost:7255/api/apiproducts';

  constructor(private http: HttpClient, private authService: AuthService) {
    this.initializeToken();
  }

  private initializeToken(): void {
    const user = new User();
    user.email = 'password1234@gmail.com';
    user.password = '1234';

    this.authService.getToken(user).subscribe({
      next: (data: string) => {
        this.token = data;
        console.log('Токен получен:', this.token);
      },
      error: (err) => console.error('Ошибка при получении токена:', err),
    });
  }


  createProduct(product: Product): Observable<any> {
    return this.http.post(this.url, product);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put(`${this.url}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
*/