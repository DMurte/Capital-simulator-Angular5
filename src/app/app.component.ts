import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


declare var $
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  result = false
  interests : string
  finalCapital : string


  runSimulation(simForm:NgForm){
    const data = simForm.value
    const capital = data.capital
    const interests = data.interests
    const months = data.months
    const monthly_payment = data.monthly_payment

    const interestsCoef = (interests/100)
    let finalCap = capital * (interestsCoef + 1)
    for(let i = 1; i < months; i++) finalCap = (finalCap + monthly_payment) * (interestsCoef + 1)

    this.interests = this.parseNumber(finalCap * interestsCoef)
    this.finalCapital = this.parseNumber(finalCap)
    this.result = true

  }

  parseNumber(number){
    return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  }

  restart(){
    this.result = false
  }


}
