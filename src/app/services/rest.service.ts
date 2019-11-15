import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {of} from "rxjs";
import {catchError} from "rxjs/operators";
import {JSONREST} from "./jsonRest";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private URL: string
  constructor(private http: HttpClient) {
    this.URL = environment.UrlService
  }


  getCatalogo (){
    console.log(this.URL+'/catalogos')
    return this.http.get(this.URL+'/catalogos' )
  }
  getWindow () {
    return this.http.get(this.URL+'/window' )
  }

}
