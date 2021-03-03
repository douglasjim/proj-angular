import { ResponsePageble } from './responsePageble.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})

export class LiveService{

    ApiUrl = 'https://swapi.dev/api/people/1/';
    HttpOptions = {
        heards: new HttpHeaders({
            'Content-Type': 'applications/json'
        })
    };

    constructor(private httpClient: HttpClient){
        
    }

    //essas linhas de codigo abaixo é chamado um metodo !!!
    public getLives(flag: string): Observable<ResponsePageble>{
        return this.httpClient.get<ResponsePageble>(this.ApiUrl + '?flag=' + flag)
    }
}