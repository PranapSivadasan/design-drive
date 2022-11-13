import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogoListComponent } from './projects/logo-list/logo-list.component';
import { ProductListComponent } from './projects/product-list/product-list.component';
import { WebsiteListComponent } from './projects/website-list/website-list.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'websites',
    component: WebsiteListComponent
  },
  {
    path: 'logos',
    component: LogoListComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
