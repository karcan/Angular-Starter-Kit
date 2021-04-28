import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from '../@core/layouts/home-layout/home-layout.component';

const routes: Routes = [
  {path:"" , pathMatch:'full' , loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:"about-us", loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path:"contact-us", loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
