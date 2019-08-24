import { ProjekatInterface } from './projekat.model';

export interface Komentar {
    id?:number;
	imeKorisnika?:string;
	
	projekat?:ProjekatInterface;
    komentar?:string;
    upVote?:number;
    downVote?:number;
}



export class KomentarKlasa implements Komentar {
    id?:number;
	imeKorisnika?:string;
	
	projekat?:ProjekatInterface;
    komentar?:string;
    upVote?:number;
    downVote?:number;

    constructor(k:Komentar){
        this.downVote=k.downVote;
        this.id=k.id;
        this.imeKorisnika=k.imeKorisnika;
        this.komentar=k.komentar;
        this.projekat=k.projekat;
        this.upVote=k.upVote;
    }
}
