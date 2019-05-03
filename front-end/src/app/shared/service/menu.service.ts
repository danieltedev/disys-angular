import { Injectable } from '@angular/core';
import { Menu } from '../entity/menu';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Array<Menu>> {
    return this.http.get<Array<Menu>>(environment.API_MENUS).pipe(
      take(1),
      catchError(e => throwError(e))
    );
  }
}
