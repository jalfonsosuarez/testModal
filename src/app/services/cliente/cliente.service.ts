import { Injectable } from '@angular/core';
import { Cliente } from '../../modelos/cliente.model';

@Injectable()
export class ClienteService {

  public clientes: Cliente[];

  constructor() {

    this.clientes = [];
    const cliente = new Cliente();
    cliente.nombre = 'Cliente 1';
    cliente.domicilio = 'Domicilio del cliente 1';
    this.clientes.push(cliente);

  }

  grabar( cliente: Cliente, pos: number ) {

    if ( pos === null ) {
      this.clientes.push( cliente );
    } else {
      this.clientes[ pos ] = cliente;
    }

  }

  borrar( pos: number ) {
    this.clientes.splice( pos );
  }

}
