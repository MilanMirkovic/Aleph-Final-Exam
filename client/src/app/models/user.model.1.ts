
import { Komentar } from './komentar.model';

export interface UserInterface{
    id?:number;
    name?:string;
    surname?:string;
    username?:string;
    password?:string;
   
    komentari?:Komentar[];
   


}

export class User implements UserInterface{
    id:number;
    name:string;
    surname:string;
    username:string;
    password:string;
   
    komentari:Komentar[];
   


    constructor(ucf:UserInterface){
        this.id=ucf.id;
        this.name=ucf.name;
        this.surname=ucf.surname;
        this.username=ucf.username;
        this.password=ucf.password;
   
        this.komentari=ucf.komentari;

    }

}