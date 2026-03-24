import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // <-- FIXED (plural)
})
export class App {
  protected readonly title = signal('campus-portal-frontend');
}
