import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../shared/service/mensagem.service';
import { Observable } from 'rxjs';
import { Mensagem } from '../shared/entity/mensagem';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mensagens: Observable<Array<Mensagem>>;
  dataRoute: Observable<Data>;

  constructor(
    private mensagemService: MensagemService,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  excluir(id: number) {
    this.mensagemService.removeMensagem(id)
      .subscribe(response => {
        console.log(response);
        this.snackBar.open('Mensagem excluida com sucesso', null, { duration: 2000 });
        this.router.navigate(['/dashboard']);
      }, error => {
        console.log(error);
        this.snackBar.open('Erro ao excluir a mensagem', null, { duration: 2000 });
      });
  }

  ngOnInit() {
    this.dataRoute = this.activateRoute.data;
    this.mensagens = this.mensagemService.getMensagens();
  }

}
