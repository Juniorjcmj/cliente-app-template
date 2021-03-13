import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServicosPrestados } from '../model/servicosPrestados';
import { CrudService } from '../shared/crud-service';

@Injectable({
  providedIn: 'root'
})
export class ServicosPrestadosServiceService extends CrudService<ServicosPrestados> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}/servicos-prestados`);
  }
}

