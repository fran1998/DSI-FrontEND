import { HttpClient ,HttpHeaders,
  HttpErrorResponse,
  HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoVisitaService {
  resourceUrl: string = "";
  constructor(private httpClient: HttpClient) { }

  getNombre()
  {
    return this.httpClient.get(this.resourceUrl);
  }
}
