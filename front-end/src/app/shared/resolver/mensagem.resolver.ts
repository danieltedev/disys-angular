import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Mensagem } from '../entity/mensagem';
import { Observable } from 'rxjs';
import { MensagemService } from '../service/mensagem.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemResolver implements Resolve<Mensagem> {

  constructor(private mensagemService: MensagemService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Mensagem | Observable<Mensagem> | Promise<Mensagem> {
    return this.mensagemService.getMensagen(route.params.id);
  }

}
