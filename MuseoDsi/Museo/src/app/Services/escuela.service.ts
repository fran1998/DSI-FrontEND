import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {
  resourceUrl : string;
  constructor(private httpClient: HttpClient) 
  {
    this.resourceUrl = "https://localhost:44322/api/Escuela";
  }
  getNombre()
  {
    return this.httpClient.get(this.resourceUrl);
  }
}
