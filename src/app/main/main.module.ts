import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { ContactComponent } from './containers/contact/contact.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent, HomeComponent, ContactComponent, PageNotFoundComponent, NavigationComponent],
  imports: [CommonModule, MainRoutingModule],
  exports: [NavigationComponent, MainRoutingModule]
})
export class MainModule {}
