import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Temp} from './temp';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  values : string = '';
  values2 : string = '';
  selectedTemp : Temp;

  constructor() { 
    this.selectedTemp = new Temp();
    this.selectedTemp.firstUnit = "celsius";
    this.selectedTemp.first = 0;
    this.selectedTemp.secondUnit = "fahrenheit";
    this.selectedTemp.second = 0;
  }

  ngOnInit() {
  }

  onKey(value : string) {
    this.values += value + '|';
  }

  onKey2(value : string) {
    this.values2 += value + '|';
  }

  onSubmit(tempForm : any){
    console.log(tempForm.form.value.first);
    console.log(tempForm.form.value.firstUnit);
    this.selectedTemp.secondUnit = tempForm.form.value.tempUnit === "celsius" ? "fahrenheit" : "celsius";
    this.selectedTemp.second = tempForm.form.value.tempUnit === "celsius" ? (tempForm.form.value.temp * 9/5)+32 : (tempForm.form.value.temp - 32)*5/9;
  }
}
