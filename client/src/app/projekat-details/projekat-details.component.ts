import { Component, OnInit } from '@angular/core';
import { ProjekatService } from '../projekat.service';
import { ActivatedRoute } from '@angular/router';
import {  Projekat } from '../models/projekat.model';
import { Komentar, KomentarKlasa } from '../models/komentar.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInterface } from '../models/user.model.1';
import { AuthenticationService } from '../security/authentication.service';

@Component({
  selector: 'app-projekat-details',
  templateUrl: './projekat-details.component.html',
  styleUrls: ['./projekat-details.component.css']
})
export class ProjekatDetailsComponent implements OnInit {

  dodajKomentar:boolean;

  constructor(private route: ActivatedRoute, private projekatService:ProjekatService, private http:HttpClient, private atuhetntication:AuthenticationService) { }

  noviKomentar:Komentar;
  ngOnInit( ) {
    //this.getUserName();
   // this.completeUser();
   this.getProjekat();
    this.noviKomentar=new KomentarKlasa ({
      id:0,
      imeKorisnika:'',
      projekat:{},
     komentar:'',
        upVote:0,
        downVote:0,
    })
  }

  sub:any;
  id:number;
  projekat:Projekat;
  user:UserInterface;
  korisnikUsername:string;

  komentarToggle(){
    this.dodajKomentar=!this.dodajKomentar
  }
  getProjekat(){
    this.sub= this.route.params.subscribe((params)=>{
      this.id=+params['id'];
      this.projekatService.getOne(this.id).subscribe((res:Projekat)=>{
        this.projekat=res;
      })
    })
  }


  addComment(){
    let k=this.noviKomentar;
    k.projekat=this.projekat;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('api/projekti/komentar', k, {headers}).subscribe((res:any)=>{
      this.getProjekat();
    })

  }

  getUserName(){
    this.korisnikUsername= this.atuhetntication.getUser();
  
    }
  
    completeUser(){
      this.projekatService.getUser(this.korisnikUsername).subscribe((rets:UserInterface)=>{
        this.user=rets;
      
    
      
      })
    }


}
