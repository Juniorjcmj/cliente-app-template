import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/clientes/cliente-form/cliente';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AlertService } from 'src/app/shared/alert.service';
import { ClientesService } from '../../clientes.service';
import { ServicosPrestadosServiceService } from '../servicos-prestados-service.service';
import { ServicosPrestados } from '../../model/servicosPrestados';

@Component({
  selector: 'app-servidos-prestados-form',
  templateUrl: './servidos-prestados-form.component.html',
  styleUrls: ['./servidos-prestados-form.component.css']
})
export class ServidosPrestadosFormComponent implements OnInit {


 formulario: FormGroup;
 erros: String[];
 id: number;
 clientes: Cliente[] = [];

  constructor(public formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private router : Router,
    private activateRouter : ActivatedRoute,
    private alert : AlertService,
    private clienteServive: ClientesService,
    private service: ServicosPrestadosServiceService) { }

  ngOnInit(): void {

    this.clienteServive.list().subscribe(response => this.clientes = response);

    this.formulario = this.formBuilder.group({
      descricao: [null, [Validators.required, Validators.minLength(4)]],
      valor:[null, [Validators.required]],
      idCliente:[null, [Validators.required]],
      dataServico:[null, [Validators.required]]

    });
  }
  onSubmit(){
    if(this.id){
      this.service.save(this.formulario.value)
      .subscribe(response => {
        this.erros = [];
            this.alert.alertWithSuccess("Atualização realizada com sucesso!")
      },
      error => {
        this.erros = error.error.erros;
        this.alert.alertError(this.erros)
      });

    }else{
      this.service.save(this.formulario.value)
      .subscribe(response => {
        this.erros = [];
        this.formulario.setValue(response);
            this.alert.alertWithSuccess("Cadastro realizado com sucesso!")
      },
      error => {
        this.erros = error.error.erros;
        this.alert.alertError(this.erros)

      });

    }
  }
  listaServicosPrestados(){

  }

}
