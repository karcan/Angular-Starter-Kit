import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", pathMatch: "full", component:DashboardComponent}
    ])
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
