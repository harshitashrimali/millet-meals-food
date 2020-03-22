import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HomeComponent } from './componets/home/home.component';
import { RouterModule } from '@angular/router';
import { LocationAndHoursComponent } from './componets/location-and-hours/location-and-hours.component';
import { AboutComponent } from './componets/about/about.component';
import { MenuComponent } from './componets/menu/menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmainLoginComponent } from './componets/admain-login/admain-login.component';
import { ManageRecipesComponent } from './componets/manage-recipes/manage-recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LocationAndHoursComponent,
    AboutComponent,
    MenuComponent,
    AdmainLoginComponent,
    ManageRecipesComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
   RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'location-and-hours',
        component:LocationAndHoursComponent
      },
      {
        path:'about',
        component :AboutComponent
      },
      {
        path:'menu',
        component: MenuComponent
      },
      {
        path:'admain-login',
        component:AdmainLoginComponent
      },
      {
        path:'manage-recipes',
        component:ManageRecipesComponent
      }
     
    ]),
  BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
