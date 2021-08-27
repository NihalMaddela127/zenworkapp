import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stores = [];
  constructor(private readonly dashboardService: DashboardService) { }

  ngOnInit() {
    let userDetails = JSON.parse(JSON.stringify(localStorage.getItem('userDetails')));
    this.dashboardService.getStoresByUser(userDetails.insertedId).subscribe((storeData: any[]) => {
      this.stores=storeData;
    });
  }

}
