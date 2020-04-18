import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as moment from 'moment';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(public ngControl: NgControl) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
    // const test = this.isValidDate(ingName);
    // alert(moment(ingName, 'dd/mm/yyyy').isValid());
    const date = moment(ingName, 'DD MM YYYY').isValid();
  }

  // Validates that the input string is a valid date formatted as "mm/dd/yyyy"
  isValidDate(dateString) {
      // First check for the pattern
      // ^\d{1,2}[\-\s\/]\d{1,2}[\-\s\/]\d{4}$
      //if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
      if(!/^\d{1,2}[\-\s\/]\d{1,2}[\-\s\/]\d{4}$/.test(dateString))
          return false;

      // Parse the date parts to integers
      var parts = dateString.split("/");
      var day = parseInt(parts[1], 10);
      var month = parseInt(parts[0], 10);
      var year = parseInt(parts[2], 10);

      // Check the ranges of month and year
      if(year < 1000 || year > 3000 || month == 0 || month > 12)
          return false;

      var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

      // Adjust for leap years
      if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
          monthLength[1] = 29;

      // Check the range of the day      
      return day > 0 && day <= monthLength[month - 1];
  };

  onInputChange(event, backspace) {
    let newVal = event.replace(/\D/g, '');
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 2) {
      newVal = newVal.replace(/^(\d{0,2})/, '$1/');
    } else if (newVal.length <= 4) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1/$2/');
    } else if (newVal.length <= 8) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');
    } else if (newVal.length <= 10) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3 ~ ');
    } else if (newVal.length <= 12) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})(\d{0,2})/, '$1/$2/$3 ~ $4/'); 
    } else if (newVal.length <= 16) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3 ~ $4/$5/$6'); 
    } else {
      newVal = newVal.substring(0, 16);
      newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3 ~ $4/$5/$6');
    }
    this.ngControl.valueAccessor.writeValue(newVal);
  }
}
