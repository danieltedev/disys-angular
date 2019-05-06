import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MensagemService } from '../shared/service/mensagem.service';
import { Mensagem } from '../shared/entity/mensagem';
import { Assunto } from '../shared/entity/assunto';
import { AssuntoService } from '../shared/service/assunto.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cadastro-mensagem',
  templateUrl: './cadastro-mensagem.component.html',
  styleUrls: ['./cadastro-mensagem.component.css']
})
export class CadastroMensagemComponent implements OnInit {

  formMensagem: FormGroup;
  assuntos: Observable<Array<Assunto>>;

  constructor(
    private fb: FormBuilder,
    private mensagemService: MensagemService,
    private assuntoService: AssuntoService,
    private snackBar: MatSnackBar) { }

  createFromMensagem() {
    this.formMensagem = this.fb.group({
      nome: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [null, [Validators.required, Validators.email]],
      assunto: [null, Validators.required],
      telefone: [null, Validators.pattern('[0-9]*')],
      mensagemTxt: [null, [Validators.required, Validators.maxLength(500)]]
    });
  }

  get nome(): FormControl {
    return this.formMensagem.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.formMensagem.get('email') as FormControl;
  }

  get assunto(): FormControl {
    return this.formMensagem.get('assunto') as FormControl;
  }

  get telefone(): FormControl {
    return this.formMensagem.get('telefone') as FormControl;
  }

  get mensagemTxt(): FormControl {
    return this.formMensagem.get('mensagemTxt') as FormControl;
  }

  enviar() {
    if (this.formMensagem.valid) {
      const mensagem: Mensagem = this.formMensagem.value;
      mensagem.dataHoraCadastro = new Date();
      this.mensagemService.saveMensagem(mensagem)
        .subscribe(response => {
          console.log(response);
          this.snackBar.open('Cadastro efetuado com sucesso', null, { duration: 2000 });
          this.formMensagem.reset();
          this.formMensagem = new FormGroup(this.formMensagem.controls);
        }, error => {
          console.log(error);
          this.snackBar.open('Erro ao efetuado o cadastro', null, { duration: 2000 });
        });
    }
  }

  getMensagemErro(field: FormControl): string {
    return field.hasError('required') ? 'Esse compo é obrigatório' :
      field.hasError('email') ? 'E-mail inválido' :
      field.hasError('maxlength') ? `São permitido no máximo ${field.errors.maxlength.requiredLength}` :
      field.hasError('minlength') ? `São permitido no mínimo ${field.errors.minlength.requiredLength}` :
      field.hasError('pattern') ? `O valor informado é inválido` :
      '';
  }

  ngOnInit() {
    this.createFromMensagem();
    this.assuntos = this.assuntoService.getAssuntos();
  }

}
