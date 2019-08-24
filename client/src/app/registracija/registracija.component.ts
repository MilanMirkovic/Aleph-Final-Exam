import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  usersInSystem:User[];
  existingUser:boolean;
  newUser:User;
  constructor(private http:HttpClient,private router: Router) { 
    this.newUser =new  User ({
      firstName:'',
      lastName:'',
      username:'',
      password:'',
    })
    this.existingUser=false;
  }

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers(){
    this.http.get('api/users').subscribe((res:User[]) =>{
      this.usersInSystem=res;
    })
  }


  register(){
    this.chechUser(this.newUser.username);
    let headers=new HttpHeaders({'Content-Type':'application/json'});

    this.http.post<User>('api/register',this.newUser,{headers}).subscribe((res:any)=>{
      if(!this.existingUser){
      this.router.navigate(['/main']);
      }else{
        this.existingUser=true;
      }
    })

  }


  chechUser(username:string){
    for(let u of this.usersInSystem){
      if(u.username !== username){
        
        this.existingUser=false;
      }else{
        this.existingUser=true;
     
      }
    }
  }
}
