import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SimpleServiceService } from './simple-service.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdInputModule, MdRadioModule,
   MdToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchCardComponent } from './search-card.component';
import { SearchResultComponent } from './search-result.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AlertService, AuthenticationService, UserService } from './_services/index';

const appRoutes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'search-card', component: SearchCardComponent }
  // { path: 'search-result', component: SearchResultComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SearchCardComponent,
    SearchResultComponent,
    HomepageComponent,
    LogInComponent,
    SignUpComponent
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
  providers: [ SimpleServiceService, AlertService,
        AuthenticationService,
        UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
