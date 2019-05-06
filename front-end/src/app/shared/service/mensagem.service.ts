import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Mensagem } from '../entity/mensagem';
import { environment } from '../../../environments/environment';
import { catchError, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private http: HttpClient) { }

  getMensagens(): Observable<Array<Mensagem>> {
    return this.http.get<Array<Mensagem>>(environment.API_MENSAGEM).pipe(
      take(1),
      catchError(e => throwError(e))
    );
  }

  getMensagen(id: number): Observable<Mensagem> {
    return this.http.get<Mensagem>(`${environment.API_MENSAGEM}/${id}`).pipe(
      take(1),
      catchError(e => throwError(e))
    );
  }

  saveMensagem(mensagem: Mensagem) {
    return this.http.post(environment.API_MENSAGEM, mensagem).pipe(
      take(1),
      catchError(e => throwError(e))
    );
  }

  removeMensagem(id: number) {
    return this.http.delete(`${environment.API_MENSAGEM}/${id}`).pipe(
      take(1),
      catchError(e => throwError(e))
    );
  }
}
