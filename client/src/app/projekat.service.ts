import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projekat } from './models/projekat.model';
import { UserInterface } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProjekatService {

  constructor(private http:HttpClient) { }



  getAll(pageNumber:number):Observable<Page>{
   return this.http.get<Page>(`api/projekti?page=${pageNumber}&size=3`);
  }
  getUser(user:string): Observable<UserInterface>{
    return this.http.get<UserInterface>(`/users/${user}`);
  }

  getOne(id:number):Observable<Projekat>{
    return this.http.get<Projekat>(`api/projekti/${id}`);
  }

  filterPoNazivu(naziv:string):Observable<Page>{
    return this.http.get<Page>(`api/projekti/filter?naziv=${naziv}`);
  }

  save(projekat:Projekat):Observable<Projekat>{
    let headers=new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post<Projekat>('api/projekti', JSON.stringify(projekat), {headers});
    
  }

  izmena(id:number,projekat:Projekat):Observable<Projekat>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Projekat>(`api/projekti/${id}`, projekat, { headers });
  }

  
}
