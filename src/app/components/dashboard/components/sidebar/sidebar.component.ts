import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {EventService} from '../../../../services/event.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  formVisible: boolean = false;

  event = {
    eventId: null,
    descricao: '',
    horaInicio: '',
    horaTermino: ''
  };

  constructor(private router: Router, private eventService: EventService) {}

  toggleForms(): void {
    this.formVisible = !this.formVisible;
  }

  createEvent(): void {
    this.eventService.createEvent(this.event).subscribe({
      next: (response) => {
        console.log('Evento criado com sucesso:', response);
        this.toggleForms();
        window.location.reload();
      },
      error: (err) => {
        if (err.status === 409)
          alert('Erro: Conflito de horários! Escolha um horário diferente.');
        console.error('Erro ao criar evento:', err);
      }
    });
  }


  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
