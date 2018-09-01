import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mealType'
})
export class MealTypePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    
    switch (value) {
      case 1:
        return "Breakfast";
      case 2:
        return "Lunch"
      case 3:
        return "Dinner";
      default:
        return "Nothing";
    }
  }

}
