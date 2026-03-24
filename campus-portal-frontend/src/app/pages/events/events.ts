import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './events.html',
  styleUrls: ['./events.css']
})
export class Events implements OnInit {

  events: any[] = [];
  showModal: boolean = false;

  data = {
    title: '',
    date: '',
    venue: '',
    status: 'Completed'
  };

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventsService.getEvents().subscribe((res) => {
      this.events = res;
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveEvent() {
  const formattedData = {
    ...this.data,
    date: new Date(this.data.date)  // Convert to proper date object
  };

  this.eventsService.addEvent(formattedData).subscribe(
    () => {
      alert("Event saved successfully!");
      this.closeModal();
      this.loadEvents();
    },
    (err) => {
      console.error(err);
      alert("Failed to save event");
    }
  );
}


  deleteEvent(id: string) {
    if (!confirm("Are you sure you want to delete?")) return;

    this.eventsService.deleteEvent(id).subscribe(
      () => {
        alert("Event deleted");
        this.loadEvents();  // 🔥 refresh after delete
      },
      () => alert("Failed to delete")
    );
  }
}
