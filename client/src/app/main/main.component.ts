import { Component, OnInit } from '@angular/core';
import { ProjekatService } from '../projekat.service';
import { Projekat } from '../models/projekat.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../security/authentication.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  page: Page;
  naziv: string;

  izmeni: boolean = false;

  projekatZaIzmenu: Projekat;

  projekatZaDodavanje: Projekat;
  loggedIn: boolean;
  isAdministrator: boolean;
  roles: any;
  constructor(private projekatService: ProjekatService, private http: HttpClient, private authenticationService: AuthenticationService) {

    this.projekatZaIzmenu = new Projekat({
      id: 0,
      naziv: '',
      opis: '',
      readMe: '',

    })


    this.naziv = '';
  }

  ngOnInit() {

    this.loggedIn = this.authenticationService.isLoggedIn();


    this.getPage(0);
  }



  getPage(pageNumber: number) {

    this.projekatService.getAll(pageNumber).subscribe((res: Page) => {
      this.page = res;
    })

  }

  filter() {
    this.projekatService.filterPoNazivu(this.naziv).subscribe((res: Page) => {
      this.page = res;
    });
  }

  resetFilter() {
    this.naziv = '';
    this.getPage(0);
  }

  previousPage() {
    this.getPage(this.page.number - 1);
  }

  nextPage() {
    this.getPage(this.page.number + 1);
  }

  izmeniClick() {
    this.izmeni = !this.izmeni;

  }

  izmeniProjekat(p) {
    this.projekatZaIzmenu = p;
    this.izmeniClick();

  }


  sacuvajProjekat() {

    if (this.projekatZaIzmenu.id === 0) {

      this.projekatService.save(this.projekatZaIzmenu).subscribe((res: any) => {
        this.getPage(0);
      });
    }
    else {
      this.projekatService.izmena(this.projekatZaIzmenu.id, this.projekatZaIzmenu).subscribe((res: any) => {
        this.getPage(0);
        this.projekatZaIzmenu = new Projekat({
          id: 0,
          naziv: '',
          opis: '',
          readMe: '',

        })
      })
    }
  }









  obrisi(p: Projekat) {
    this.http.delete<Page>(`api/projekti/${p.id}`).subscribe((res: Page) => {
      this.page = res;
      this.getPage(0);
    })
  }

  reset() {
    this.projekatZaIzmenu = new Projekat({
      id: 0,
      naziv: '',
      opis: '',
      readMe: '',

    })

  }



}
