import { Component, OnInit, } from '@angular/core';
import {MatButtonModule} from '@angular/material'
import { DatePipe } from '@angular/common';
import {FetchDataService } from 'src/app/fetch-data.service';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.css'],
  providers: [DatePipe]
})
export class UserBarComponent implements OnInit {

  username: any;
  position: any;
  total: number;
  approved: number;
  rejected: number;
  checked: boolean = true;


  startTime: any;
  breakTime: any;
  currTime: any;
  breakCounter:any;
  availableClock :any = 900000;

  constructor(public datepipe: DatePipe, private fetchdata: FetchDataService) {     
  }

  ngOnInit() {
    
    // Load Basic User Details
    this.fetchdata.getData('https://raw.githubusercontent.com/Vandana-25/vector25/master/userbardetails')
    .subscribe(data => {
      this.username = data.user;
      this.position = data.position;
      this.total = data.total;
      this.approved = data.approved;
      this.rejected = data.rejected;
    })

    this.startTime = new Date();
  }

  ngAfterViewChecked() {
    this.resumeBreak(event);
    this.resumeAvailable();
  }

  // Logic for Available Timer
  resumeAvailable(){
    setInterval(() => {
      this.availableClock = this.datepipe.transform((this.availableClock - 1000), 'mm:ss')
    },1000);
  }

  //Logic to set BreakTimer
  resumeBreak(event){
    if(event.target.value) {
      console.log("toggle event triggered");
      setInterval(() => {
        this.currTime = new Date();
        this.breakTime = this.datepipe.transform((this.currTime - this.startTime, 'mm:ss'));
      },1000);
    } 
  }
}
