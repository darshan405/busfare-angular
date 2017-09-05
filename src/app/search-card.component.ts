import { Component, OnInit } from '@angular/core';
import { SearchCardInterface } from './search.interface';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  model: SearchCardInterface = {tripType: '0', origin: 'Bangalore', destination: 'Hyderabad', departureDate: new Date(),
    arrivalDate: new Date()};

  constructor() { }

  ngOnInit() {
  }

}
