import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServidosPrestadosFormComponent } from './servidos-prestados-form/servidos-prestados-form.component';
import { ServidosPrestadosPesquisaComponent } from './servidos-prestados-pesquisa/servidos-prestados-pesquisa.component';


const routes: Routes = [
  {  path:"servicos-prestados-form", component: ServidosPrestadosFormComponent},
  {  path:"servicos-prestados-pesquisa", component: ServidosPrestadosPesquisaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosPrestadosRoutingModule { }
