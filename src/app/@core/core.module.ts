import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProjectLayoutComponent } from "./layouts/project-layout/project-layout.component";
import { EnsureModuleLoadedOnceGuard } from "./guards/ensure-module-loaded-once.guard";

import { AggregateService } from './utilities';
import { UserFooterComponent } from './components/footer/user-footer/user-footer.component';
import { AdminFooterComponent } from './components/footer/admin-footer/admin-footer.component';
import { UserHeaderComponent } from './components/header/user-header/user-header.component';
import { AdminHeaderComponent } from './components/header/admin-header/admin-header.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';


@NgModule({
  declarations: [
    ProjectLayoutComponent,
    AdminLayoutComponent,
    HomeLayoutComponent,
    UserFooterComponent,
    AdminFooterComponent,
    UserHeaderComponent,
    AdminHeaderComponent,
    ScrollToTopComponent,
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
