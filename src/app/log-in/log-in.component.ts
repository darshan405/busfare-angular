import { Component, OnInit } from '@angular/core';
import {  Router  } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { SimpleServiceService } from '../simple-service.service';
import { AlertService, AuthenticationService } from '../_services/index';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
   model: any = {};
    loading = false;
    returnUrl: string;
	values: any = [];
	valuesLogIn: any = [];
  	emailLogIn:String;
  	passwordLogIn:String;
  constructor(private router: Router,
    private authenticationService: AuthenticationService,
        private alertService: AlertService,
   private SimpleServiceService: SimpleServiceService) { }

 onSubmit(form) { 
  if(form.valid) {
    this.values.forEach(value => {
      if ((value.email == this.emailLogIn) && (value.password == this.passwordLogIn)){
        console.log('success')
        this.router.navigate(['/search-card']);
       }
        else {
          console.log('error')
        }
  })
  }
}

  ngOnInit() {
  	this.values = this.SimpleServiceService.getFromService(this.values);
  }
mySaveLogIn(){
    this.SimpleServiceService.saveToServices(this.valuesLogIn);
  }
}
