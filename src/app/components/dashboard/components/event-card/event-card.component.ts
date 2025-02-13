import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EventModel} from '../../../../models/event.model';
import {CommonModule, DatePipe} from '@angular/common';
import {EventService} from '../../../../services/event.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-event-card',
  imports: [
    DatePipe,
    CommonModule,
    FormsModule
  ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() event!: EventModel;
  @Output() edit = new EventEmitter<EventModel>();
  @Output() delete = new EventEmitter<string>();

  isEditing = false;

  constructor(private eventService: EventService) {}

  editEvent() {
    this.eventService.updateEvent(this.event.eventId, this.event);
  }

  deleteEvent() {
    this.eventService.deleteEvent(this.event.eventId);
  }

  editFlag() {
    if (this.isEditing) {
      this.isEditing = false;
    } else
      this.isEditing = true;
  }

}
