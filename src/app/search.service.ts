import { Injectable } from '@angular/core';

import { SearchCardInterface } from './search-card.interface';

@Injectable()
export class SearchCardService {

  constructor() { }

  getSearchResults(model: SearchCardInterface) {
    console.log(model);
  }

}
