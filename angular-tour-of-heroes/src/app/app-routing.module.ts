import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { TesterComponent }  from './tester/tester.component';
import { AddressComponent }  from './address/address.component';
import { DayPlanComponent }  from './day-plan/day-plan.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'tester', component: TesterComponent },
  { path: 'address', component: AddressComponent },
  { path: 'day-plan', component: DayPlanComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
}) // makes available elsewhhere



export class AppRoutingModule { 

  
}

