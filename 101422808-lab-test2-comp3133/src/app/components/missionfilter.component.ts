import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-missionfilter',
  imports: [CommonModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() yearSelected = new EventEmitter<string>();
  @Output() launchSuccessSelected = new EventEmitter<string>();
  @Output() landSuccessSelected = new EventEmitter<string>();
  @Output() resetFilters = new EventEmitter<void>();

  years: string[] = [
    '2006', '2007', '2008', '2009', '2010', '2011',
    '2012', '2013', '2014', '2015', '2016', '2017',
    '2018', '2019', '2020'
  ];

  selectedYear: string | null = null;
  selectedLaunchSuccess: string | null = null;
  selectedLandSuccess: string | null = null;

  selectYear(year: string) {
    this.selectedYear = year;
    this.yearSelected.emit(year);
  }

  selectLaunchSuccess(value: string) {
    this.selectedLaunchSuccess = value;
    this.launchSuccessSelected.emit(value);
  }

  selectLandSuccess(value: string) {
    this.selectedLandSuccess = value;
    this.landSuccessSelected.emit(value);
  }

  resetAll() {
    this.selectedYear = null;
    this.selectedLaunchSuccess = null;
    this.selectedLandSuccess = null;
    this.resetFilters.emit();
  }
}
