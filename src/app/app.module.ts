import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FetchdataService } from './fetchdata.service';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login.component';
import { HighLighterDirective } from './high-lighter.directive';
import { MyNgIfDirective } from './my-ng-if.directive';
import { CapitalizePipe } from './capitalize.pipe';
import { HttpClientModule } from '@angular/common/http';
let routes: Routes= [
  { path: "features",
    component: FeaturesComponent
  },
  {
    path: "pricing",
    component: PricingComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "posts/:id",
    component: PostComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
]

@NgModule({
  declarations: [    AppComponent, FeaturesComponent, PricingComponent, SidebarComponent,
     PostsComponent, PostComponent,LoginComponent, HighLighterDirective, MyNgIfDirective, CapitalizePipe ],
  imports: [    BrowserModule , FormsModule, HttpClientModule, RouterModule.forRoot(routes,{ useHash: true}), ],
  providers: [ FetchdataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
