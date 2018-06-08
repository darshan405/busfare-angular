import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdInputModule, MdRadioModule,
   MdToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchCardComponent } from './search-card.component';
import { SearchResultComponent } from './search-result.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'search-card', pathMatch: 'full' }
  // { path: 'search-card', component: SearchCardComponent }
  // { path: 'result-card', component: SearchResultComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SearchCardComponent,
    SearchResultComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MdButtonModule,
    MdCardModule,
    // MyDatePickerModule,
    MdInputModule,
    // MdNativeDateModule,
    MdRadioModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
