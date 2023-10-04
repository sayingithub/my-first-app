import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  userName = '';

  buttonClicks = [];
  buttonClicksForDate = [];
  count: number = 0;
  secretText = false;
    
  onUserReset(){      
      this.userName = '';
   }

  onButtonClicks(){
    this.secretText = !this.secretText;
    this.count = this.count + 1;
    this.buttonClicks.push(this.count);
    this.buttonClicksForDate.push(new Date()); // Date is the javascript object

    //console.log("Number of button clicked ["+this.count+"]");
    //console.log("Number of button clicked so far["+this.buttonClicks+"]");
  }

  getColour(){
    console.log("Check "+ (this.count > 4));
    return this.count >= 5 ? 'blue' : "white";
  }

  ngOnInit(): void {    
  }
}
