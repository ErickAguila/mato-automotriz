import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" }
    ],
  },
  // no layout views
  // { path: "profile", component: ProfileComponent },
  // { path: "landing", component: LandingComponent },
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
