import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './@core/layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './@core/layouts/home-layout/home-layout.component';
import { ADMIN_ROUTES } from './@core/routes/admin-routes';
import { HOME_ROUTES } from './@core/routes/home-routes';


const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeLayoutComponent,
    children: HOME_ROUTES
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: ADMIN_ROUTES
  },
  {
    path: "**", redirectTo:"home",

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:'', relativeLinkResolution:'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
