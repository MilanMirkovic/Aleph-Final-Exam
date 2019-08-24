import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from '../security/authentication.service'
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  public user;

  public wrongUsernameOrPass:boolean;

  usersInSystem:User[];

  constructor(private authenticationService:AuthenticationService,
              private router: Router,private http:HttpClient) {
    this.user = {};
    this.wrongUsernameOrPass = false;
   }

  ngOnInit() {
    this.getUsers();
  }

  login():void{

    this.authenticationService.login(this.user.username, this.user.password).subscribe(
      (loggedIn:boolean) => {
        if(loggedIn){
          this.router.navigate(['/main']);          
        }
      }
    );
  }

  getUsers(){
    this.http.get('api/users').subscribe((res:User[]) =>{
      this.usersInSystem=res;
    })
  }



}
