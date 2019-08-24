import { Komentar } from './komentar.model';

export interface ProjekatInterface {
    id?:number;
    naziv?:string;
    opis?:string;
    readMe?:string;
    komentari?:Komentar;
}

export class Projekat implements ProjekatInterface{
    id:number;
    naziv:string;
    opis:string;
    readMe:string;
    komentari?:Komentar;

    constructor(p:ProjekatInterface){
        this.id=p.id;
        this.naziv=p.naziv;
        this.opis=p.opis;
        this.readMe=p.readMe;
        this.komentari=p.komentari;
    }
}
