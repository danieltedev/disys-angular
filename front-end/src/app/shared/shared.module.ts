import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaskTelefoneDirective } from './directive/mask-telefone.directive';

@NgModule({
  declarations: [
    MaskTelefoneDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MaskTelefoneDirective
  ]
})
export class SharedModule { }
