import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosPrestadosRoutingModule } from './servicos-prestados-routing.module';
import { ServidosPrestadosPesquisaComponent } from './servidos-prestados-pesquisa/servidos-prestados-pesquisa.component';
import { ServidosPrestadosFormComponent } from './servidos-prestados-form/servidos-prestados-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ServidosPrestadosPesquisaComponent, ServidosPrestadosFormComponent],
  imports: [
    CommonModule,
    ServicosPrestadosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    ServidosPrestadosPesquisaComponent, ServidosPrestadosFormComponent
  ]
})
export class ServicosPrestadosModule { }
