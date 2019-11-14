import { Injectable } from "@angular/core";
import { baseURL } from "../shared/baseurl";
import { Estilos } from "../shared/estilos";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class EstilosService {
  constructor(private httpClient: HttpClient) {}
  getEstilos(): Observable<Estilos> {
    return this.httpClient.get<Estilos>(baseURL + "window");
  }
}
