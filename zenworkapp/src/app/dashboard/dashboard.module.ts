import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [DashboardService],
  exports: [DashboardComponent]
})
export class DashboardModule { }
