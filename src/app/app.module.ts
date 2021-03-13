import { AlertModalService } from './shared/alert-modal.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AlertService } from './shared/alert.service';
import { ServidosPrestadosFormComponent } from './servicos-prestados/servidos-prestados-form/servidos-prestados-form.component';
import { ServidosPrestadosPesquisaComponent } from './servicos-prestados/servidos-prestados-pesquisa/servidos-prestados-pesquisa.component';
import { ServicosPrestadosModule } from './servicos-prestados/servicos-prestados.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ReactiveFormsModule,
    SharedModule,
    AlertModule,
    ModalModule.forRoot(),
    SweetAlert2Module.forRoot(),
    ServicosPrestadosModule

  ],
  providers: [

    ClientesService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
