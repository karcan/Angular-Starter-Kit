import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProjectLayoutComponent } from "./layouts/project-layout/project-layout.component";
import { EnsureModuleLoadedOnceGuard } from "./guards/ensure-module-loaded-once.guard";

import { AggregateService } from './utilities';



@NgModule({
  declarations: [
    ProjectLayoutComponent,
    AdminLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [AggregateService]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
