import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  simpleAlert(){
    Swal.fire('Hello world!');
  }

  alertWithSuccess(mensagem){
    Swal.fire('Obrigado!', mensagem, 'success')
  }

  alertError(erro){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: erro,
      footer: '<a href>Why do I have this issue?</a>'
    })
  }

}
