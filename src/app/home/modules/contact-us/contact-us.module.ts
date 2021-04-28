import { ContactUsComponent } from './contact-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", pathMatch: "full", component:ContactUsComponent}
    ])
  ],
  exports:[
    ContactUsComponent
  ]
})
export class ContactUsModule { }
