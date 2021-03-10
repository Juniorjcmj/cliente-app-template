import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from '../../clientes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

 formulario: FormGroup;
 erros: String[];
 cliente: Cliente;
 apareceIsData: boolean = false;
 id: number;

  constructor( private service : ClientesService,
               public formBuilder: FormBuilder,
               private alertService: AlertModalService,
               private router : Router,
               private activateRouter : ActivatedRoute ) {
  }
  ngOnInit(): void {
    let params = this.activateRouter.params
    if(params ){
     params.subscribe(parametro => {
       this.id = parametro.id
      });
      this.service.loadById(this.id)
          .subscribe(response =>{
            this.apareceIsData = true;
            this.formulario.setValue(response);
          })

    }


    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4)]],
      cpf:[null, [Validators.required]],
      endereco:[null, [Validators.required]],
      telefone:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      id:[null],
      dataCadastro:[null]

    });
  }
  onSubmit(){
    this.service.save(this.formulario.value)
    .subscribe(response => {
      // this.erros = [];
      this.apareceIsData = true;
      this.formulario.setValue(response);
          this.alertService.shoAlertSuccess(
           "Cadastro Realizado com sucesso!"
          );



    },
    error => {
      this.erros = error.error.erros;
      console.log(error)

    });
  }
  resetar(){
    this.formulario.reset();
  }

  listaCliente(){
    this.router.navigate(['/cliente-lista'])
  }

}
