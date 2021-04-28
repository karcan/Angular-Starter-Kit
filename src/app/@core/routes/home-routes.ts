import { Routes } from "@angular/router";

export const HOME_ROUTES: Routes = [
  {path: "", loadChildren: () => import('../../home/home.module').then(m => m.HomeModule)}
]
