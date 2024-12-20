///Рабочий вариант////

// import { Injectable } from '@angular/core';
// import { User} from '../models/User';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private url:string='https://localhost:7255/api/apiauth/login'
//   constructor(private http:HttpClient) { }
//   getToken(user:User):Observable<any>{
//     return this.http.post(this.url,user)
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;

  // Для отслеживания состояния пользователя (авторизован или нет)
  private authStatusListener = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any) {
    return this.http.post(`https://localhost:7255/api/apiauth/register`, user);
  }

  login(credentials: any) {
    this.http.post<{ token: string }>(`https://localhost:7255/api/apiauth/login`, credentials).subscribe(
      (response) => {
        this.token = response.token;
        localStorage.setItem('token', this.token);
        this.authStatusListener.next(true);
        this.router.navigate(['/']);
      },
      (error) => console.error(error)
    );
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.authStatusListener.next(false);
    this.router.navigate(['/login']);
  }

  getToken(user: { email: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`https://localhost:7255/api/apiauth/login`, user);
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
}
