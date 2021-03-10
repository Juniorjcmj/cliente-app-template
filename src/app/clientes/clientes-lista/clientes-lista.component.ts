import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClientesService } from 'src/app/clientes.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Cliente } from '../cliente-form/cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes : Cliente[];
  constructor(private service:ClientesService,
              private alertService: AlertModalService,
              private router : Router) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh(){
    this.service.list().subscribe(dados => this.clientes = dados)
  }
  novoCadastro(){
    this.router.navigate(['/cliente-form'])
  }

}
