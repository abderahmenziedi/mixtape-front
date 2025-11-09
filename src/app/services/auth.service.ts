import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserRequest } from '../models/create-user-request';
import { Observable } from 'rxjs';
import { UserView } from '../models/user-view.model';
import { LoginRequest } from '../models/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:9224/api/v1/auth';

  constructor(private http: HttpClient) {}

  register(request: CreateUserRequest): Observable<UserView> {
    return this.http.post<UserView>(`${this.baseUrl}/register`, request);
  }

  login(request: LoginRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, request);
  }
}
