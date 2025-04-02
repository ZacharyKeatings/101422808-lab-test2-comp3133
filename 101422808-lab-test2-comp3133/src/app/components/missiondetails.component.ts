import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../services/spacexapi.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-missiondetails',
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission?: Mission;

  constructor(private route: ActivatedRoute, private service: SpacexapiService, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getMissionById(id).subscribe(data => this.mission = data);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
