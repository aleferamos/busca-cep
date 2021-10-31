import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ICep } from "../interfaces/ICep";

@Injectable({providedIn : 'root'})
export class buscarCepService {

    constructor(private http: HttpClient){}
    urlBase: string = environment.urlBase;

    async buscarCep(cep:string):Promise<ICep>{
        const url = `${this.urlBase}/${cep}`;
        return  await this.http.get<ICep>(url).toPromise();
    }
}