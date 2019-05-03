import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroMensagemComponent } from './cadastro-mensagem.component';

const routes: Routes = [
  { path: '', component: CadastroMensagemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroMensagemRoutingModule { }
