import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProjectBasePageComponent } from './projects/project-base-page/project-base-page.component';
import { LogoBasePageComponent } from './projects/logo-base-page/logo-base-page.component';
import { ProductBasePageComponent } from './projects/product-base-page/product-base-page.component';
import { WebsiteBasePageComponent } from './projects/website-base-page/website-base-page.component';
import { AssetsPageComponent } from './assets-page/assets-page.component';
import { WebsiteListComponent } from './projects/website-list/website-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogoListComponent } from './projects/logo-list/logo-list.component';
import { ProductListComponent } from './projects/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ProjectBasePageComponent,
    LogoBasePageComponent,
    ProductBasePageComponent,
    WebsiteBasePageComponent,
    AssetsPageComponent,
    WebsiteListComponent,
    LandingPageComponent,
    LogoListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
