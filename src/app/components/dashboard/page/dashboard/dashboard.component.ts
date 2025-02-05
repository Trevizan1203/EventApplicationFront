import { Component } from '@angular/core';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {EventModel} from '../../../../models/event.model';
import {EventService} from '../../../../services/event.service';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';
import {EventCardComponent} from '../../components/event-card/event-card.component';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    SidebarComponent,
    EventCardComponent,
    NgFor
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  events: EventModel[] = [];

  constructor(private eventService: EventService,
              private router: Router,
              private userService: UserService) {}

  ngOnInit(): void{
    this.loadEvents();
  }

  loadEvents(): void{
    this.userService.getUserEvents().subscribe({
      next: (events: EventModel[]) => {
        console.log(events);
        this.events = events;
      },
      error: (err) => console.log(err)
    });
  }

}
