import { Routes } from '@angular/router';
import { MissionlistComponent } from './components/missionlist.component';
import { MissiondetailsComponent } from './components/missiondetails.component';

export const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'mission/:id', component: MissiondetailsComponent }
];
