import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Admissions } from './pages/admissions/admissions';
import { Placements } from './pages/placements/placements';
import { Events } from './pages/events/events';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: Dashboard },
  { path: 'admissions', component: Admissions },
  { path: 'placements', component: Placements },
  { path: 'events', component: Events },
];
