import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
let routes: Routes= [
  { path: "features",
    component: FeaturesComponent
  },
  {
    path: "pricing",
    component: PricingComponent
  }
]

@NgModule({
  declarations: [    AppComponent, FeaturesComponent, PricingComponent, SidebarComponent, ],
  imports: [    BrowserModule , FormsModule, RouterModule.forRoot(routes), ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
