import { Injectable } from '@angular/core';
import { Cliente } from '../../../modelos/cliente.model';
import { ClienteService } from '../../../services/cliente/cliente.service';

@Injectable()
export class MdlClienteService {

  public oculto: string;

  public cliente: Cliente;
  public pos: number;

  public nombre: string;
  public domicilio: string;

  constructor( public _clienteService: ClienteService ) {}

  mostrarModal(cliente: Cliente, pos: number ) {

    this.cliente = cliente;
    this.pos = pos;

    if ( cliente ) {
      this.nombre = cliente.nombre;
      this.domicilio = cliente.domicilio;
    } else {
      this.nombre = '';
      this.domicilio = '';
    }

    // Muestra el modal
    this.oculto = '';
  }

  ocultarModal() {
    // Oculta el modal
    this.oculto = 'oculto';
  }

  btnAceptar() {

    this.cliente.nombre = this.nombre;
    this.cliente.domicilio = this.domicilio;

    // Llamar al servicio de la base de datos para grabar.
    this._clienteService.grabar( this.cliente, this.pos );
    this.ocultarModal();
  }

  btnBorrar( pos: number ) {
    this._clienteService.borrar( pos );
  }
}
