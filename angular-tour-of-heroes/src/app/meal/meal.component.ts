import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MealTypePipe } from '../meal-type.pipe';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() meal: number;
  @Output() choice = new EventEmitter<string>();

  mealOptions: string[];
  mealTitle: string;
  radioSelected: string;
  confirmed: boolean;

  constructor() {
    this.confirmed = false;
  }

  ngOnInit() {
    this.mealOptions = this.getMealOptions(this.meal);
  }

  getMealOptions(meal: number): string[] {
    switch (meal) {
      case 1:
        return ["Muesli", "Cornflakes", "Toast", "Sausage", "Eggs"];
      case 2:
        return ["Sandwich", "Wrap", "Apple", "Crisps", "Chocolate"];
      case 3:
        return ["Fish & Chips", "Curry", "Lasagne", "Roast Beef", "Salad"];
      default:
        return ["No choice"];
    }
  }

  confirm(): void {
    console.log(this.radioSelected);
    this.confirmed = true;
    this.choice.emit(this.radioSelected);
  }

  reset():void {
    this.confirmed = false;
    this.radioSelected = null;
  }
}