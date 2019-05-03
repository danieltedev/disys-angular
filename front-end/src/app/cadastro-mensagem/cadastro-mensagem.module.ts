import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroMensagemRoutingModule } from './cadastro-mensagem-routing.module';
import { CadastroMensagemComponent } from './cadastro-mensagem.component';

@NgModule({
  declarations: [CadastroMensagemComponent],
  imports: [
    CommonModule,
    CadastroMensagemRoutingModule
  ]
})
export class CadastroMensagemModule { }
