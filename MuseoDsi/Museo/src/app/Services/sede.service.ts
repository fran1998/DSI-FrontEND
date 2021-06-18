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
export class SedeService {
  resourceUrl : string;
  constructor(private httpClient: HttpClient) 
  {
    this.resourceUrl = "https://localhost:44322/api/Sede";
  }
  getNombre()
  {
    return this.httpClient.get(this.resourceUrl);
  }
}
