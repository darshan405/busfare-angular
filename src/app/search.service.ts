import { Injectable } from '@angular/core';

import { SearchCardInterface } from './search.interface';

@Injectable()
export class SearchCardService {

  constructor() { }

  getSearchResults(model: SearchCardInterface) {
    console.log(model);
  }

}
