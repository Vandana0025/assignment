import { Component, OnInit } from '@angular/core';
import {MatInputModule,MatSelectModule} from '@angular/material';

import {FetchDataService } from 'src/app/fetch-data.service';

interface Gender {
  value: string;
  viewValue: string;
}

interface State {
  value: string;
  viewValue: string;
}

interface District {
  value: string;
  viewValue: string;
}

interface LGA {
  value: string;
  viewValue: string;
}
interface City {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  path: any = 'https://raw.githubusercontent.com/Vandana-25/vector25/master/CustomerInfo.json';
  
  constructor(  private fetchdata: FetchDataService) { }

  ngOnInit() {
    this.fetchdata.getData(this.path)
    .subscribe(data => {
      
    })


    // return this.formBuilder.group({

    // });
  }

  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  state: State[] = [
    {value: 'gotham', viewValue: 'Gotham'},
    {value: 'metroCity', viewValue: 'Metro City'},
    {value: 'newYork', viewValue: 'New York'}
  ];

  district: District[] = [
    {value: 'district1', viewValue: 'District 1'},
    {value: 'district12', viewValue: 'District 2'},
    {value: 'district3', viewValue: 'District 3'}
  ];

  lga: LGA[] = [
    {value: 'federal', viewValue: 'Federal'},
    {value: 'public', viewValue: 'Public'},
    {value: 'private', viewValue: 'Private'},
  ];

  cars: City[] = [
    {value: 'city1', viewValue: 'City 1'},
    {value: 'city2', viewValue: 'City 2'},
    {value: 'city3', viewValue: 'City 3'}
  ];
}

