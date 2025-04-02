import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../services/spacexapi.service';
import { MissionfilterComponent } from './missionfilter.component';

@Component({
  standalone: true,
  selector: 'app-missionlist',
  imports: [CommonModule, RouterModule, MatCardModule, MissionfilterComponent],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private service: SpacexapiService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAllMissions().subscribe(data => this.missions = data);
  }

  viewDetails(id: number): void {
    this.router.navigate(['/mission', id]);
  }

  filterByYear(year: string): void {
    this.service.getMissionsByYear(year).subscribe(data => this.missions = data);
  }

  filterByLaunch(value: string): void {
    this.service.getAllMissions().subscribe(data => {
      this.missions = data.filter(m => String((m as any).launch_success) === value);
    });
  }
  
  filterByLand(value: string): void {
    this.service.getAllMissions().subscribe(data => {
      this.missions = data.filter(m => String((m as any).rocket?.first_stage?.cores[0]?.land_success) === value);
    });
  }

  resetFilters() {
    this.service.getAllMissions().subscribe(data => {
      this.missions = data;
    });
  }
}
