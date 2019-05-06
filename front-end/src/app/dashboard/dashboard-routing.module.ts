import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MensagemResolver } from '../shared/resolver/mensagem.resolver';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: ':id', component: DashboardComponent, resolve: { mensagem: MensagemResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
