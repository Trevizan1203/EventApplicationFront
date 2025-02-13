import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EventModel} from '../models/event.model';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8080/v1/events';

  constructor(private http: HttpClient) {
  }

  createEvent(event: any){
      return this.http.post(`${this.apiUrl}/create`, event, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
      })
  }


  readEvent(eventId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/read/${eventId}`);
  }

  updateEvent(eventId: string, event: any) {
    return this.http.put<void>(`${this.apiUrl}/update/${eventId}`, event, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
    }).subscribe({
      next: (response) => {
        console.log('Evento editado com sucesso:', response);
        window.location.reload();
      },
      error: (err) => {
        if(err.status === 400)
          alert(err.error);
      }
    });
  }

  deleteEvent(eventId: string) {
    return this.http.delete<void>(`${this.apiUrl}/delete/${eventId}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
    }).subscribe({
        next: (response) => {
          console.log('Evento deletado com sucesso:', response);
          window.location.reload();
        },
        error: (err) => {
          console.error('Erro ao deletar o evento:', err);
        }
      });

  }

}
