import { Component, OnInit } from '@angular/core';
import { MealComponent } from '../meal/meal.component';

@Component({
  selector: 'app-day-plan',
  templateUrl: './day-plan.component.html',
  styleUrls: ['./day-plan.component.css']
})
export class DayPlanComponent implements OnInit {

  breakfast: string;
  lunch: string;
  dinner: string;

  constructor() {
    this.breakfast = "";
    this.lunch = "";
    this.dinner = "";
  }

  ngOnInit() {
  }

  onChosen(choice: string, meal: number) {
    switch (meal) {
      case 1:
        this.breakfast = choice;
        break;
      case 2:
        this.lunch = choice;
        break;
      case 3:
        this.dinner = choice;
        break;
      default:
        //do nothing
    }
  }

  resetAll(b:any, d:any, l: any) {
    b.reset();
    d.reset();
    l.reset();
    this.breakfast = "";
    this.lunch = "";
    this.dinner = "";
  }

}
