import { BrowserModule } from '@angular/platform-browser';
import { ContactUsComponent } from './../contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", pathMatch: "full", component:AboutUsComponent}
    ])
  ],
  exports: [
  ],
  bootstrap:[AboutUsComponent]
})
export class AboutUsModule { }
