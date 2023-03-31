import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightgalleryModule } from 'lightgallery/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { AdminHeaderComponent } from './components/headers/admin-header/admin-header.component';
import { AdminFooterComponent } from './components/footers/admin-footer/admin-footer.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { HomeNavbarComponent } from './components/navbars/home-navbar/home-navbar.component';
import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { PagesDropdownComponent } from './components/dropdowns/pages-dropdown/pages-dropdown.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    AuthComponent,
    SidebarComponent,
    AdminNavbarComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    FooterComponent,
    HomeNavbarComponent,
    AuthNavbarComponent,
    PagesDropdownComponent,
    FooterSmallComponent,
    DashboardComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightgalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
