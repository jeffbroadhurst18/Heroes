import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Address} from './address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  formattedAddress: {
    firstLine:string;
    secondLine:string;
    thirdLine:string;
  }

  addressValid : boolean;

  currentAddress : Address;

  constructor() { }

  ngOnInit() {
      this.currentAddress = new Address();
      this.addressValid = false;
  }

  onSubmit(addressForm: any)
  {
    
   // this.formattedAddress = { firstLine:'1', secondLine:'2', thirdLine:'3'}
    this.formattedAddress = { firstLine:addressForm.form.value.housenumber + " " + addressForm.form.value.street + ",",
                              secondLine:addressForm.form.value.city + ",",
                              thirdLine:addressForm.form.value.postcode + "."};
    
    this.addressValid = this.formattedAddress.firstLine.length > 0 && this.formattedAddress.secondLine.length > 0 && this.formattedAddress.thirdLine.length > 0;
  }
    
}
