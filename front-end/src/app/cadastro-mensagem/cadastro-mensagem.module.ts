import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroMensagemRoutingModule } from './cadastro-mensagem-routing.module';
import { CadastroMensagemComponent } from './cadastro-mensagem.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CadastroMensagemComponent],
  imports: [
    CommonModule,
    CadastroMensagemRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    SharedModule,
  ]
})
export class CadastroMensagemModule { }
