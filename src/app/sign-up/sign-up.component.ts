import { Component, OnInit } from '@angular/core';
import { SimpleServiceService } from '../simple-service.service';
import {  Router  } from '@angular/router';
import { AlertService, UserService } from '../_services/index';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   model: any = {};
    loading = false;
	name:String;
  	lastname:String;
  	email:String;
  	password:String;
	values: any = [];
	valuesLogIn: any = [];
  constructor(private userService: UserService,
    private router: Router, 
    private alertService: AlertService,
    private SimpleServiceService: SimpleServiceService) { }


 onSubmit(form) { 
  if(form.valid) {
    this.values.push({name: this.name,lastname: this.lastname, email: this.email,password: this.password});
    form.reset()
  }
  this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
               
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
}
 ngOnInit() {
   this.valuesLogIn = this.SimpleServiceService.getFromServices(this.valuesLogIn);
  }
mySave(){
    this.SimpleServiceService.saveToService(this.values);
  }
}
