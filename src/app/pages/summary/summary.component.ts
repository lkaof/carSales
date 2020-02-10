import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  selectedSummary
  selectedAccs
  totalCost: 0
  constructor(private router: Router) {
    this.selectedSummary = history.state
    this.selectedAccs = this.selectedSummary.accessories
    this.totalCost = this.selectedSummary.modelCost + this.selectedSummary.colorCost + this.selectedSummary.accTotalCost
  }
}
