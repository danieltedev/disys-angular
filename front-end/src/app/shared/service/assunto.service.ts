import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Assunto } from '../entity/assunto';
import { environment } from '../../../environments/environment';
import { take, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {

  constructor(private http: HttpClient) { }

  getAssuntos(): Observable<Array<Assunto>> {
    return this.http.get<Array<Assunto>>(environment.API_ASSUNTO).pipe(
      take(1),
      catchError(e => throwError(e))
    );
  }
}
