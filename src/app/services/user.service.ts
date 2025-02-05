import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {EventModel} from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/v1/users';

  constructor(private http: HttpClient) {
  }

  login(userData: UserModel) {
    return this.http.post('http://localhost:8080/v1/auth/login', userData)
  }

  register(userData: UserModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, userData);
  }

  getUserEvents(): Observable <EventModel[]> {
    return this.http.get<EventModel[]>(`${this.apiUrl}/getlist`);
  }
}
