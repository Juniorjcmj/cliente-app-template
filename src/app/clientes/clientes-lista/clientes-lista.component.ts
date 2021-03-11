import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClientesService } from 'src/app/clientes.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Cliente } from '../cliente-form/cliente';
import { AlertService } from '../../shared/alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes : Cliente[];
  constructor(private service:ClientesService,
              private alertService: AlertModalService,
              private router : Router,
              private alert : AlertService) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh(){
    this.service.list().subscribe(dados => this.clientes = dados)
  }
  novoCadastro(){
    this.router.navigate(['/cliente-form'])
  }

  confirmarDelecao(id, nome){
    Swal.fire({
      title: 'Deseja Excluir ' + nome + '?',
      text: "A operação não poderá ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, Deleta!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.remove(id).subscribe(result =>{
          Swal.fire(
            'Deletado!',
            'Objeto Excluido com sucesso.',
            'success'
          )
          this.onRefresh();
        },
      error => {
        this.alert.alertError;
      })
      }
    })
  }
}
