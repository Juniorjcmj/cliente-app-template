import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';



@NgModule({
  declarations: [ClienteFormComponent, ClientesListaComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  exports:[
    ClienteFormComponent,
    ClientesListaComponent
  ]
})
export class ClientesModule { }
