import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { TesterComponent } from './tester/tester.component';
import { AddressComponent } from './address/address.component';
import { DayPlanComponent } from './day-plan/day-plan.component';
import { MealComponent } from './meal/meal.component';
import { MealTypePipe } from './meal-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    TesterComponent,
    AddressComponent,
    DayPlanComponent,
    MealComponent,
    MealTypePipe
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule,HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }) //intercept Http requests and returns replies.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
