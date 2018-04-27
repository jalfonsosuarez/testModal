import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../modelos/cliente.model';
import { Telefono } from '../../modelos/telefono.model';
import { MdlClienteService } from '../modals/mdl-cliente/mdl-cliente.service';
import { ClienteService } from '../../services/cliente/cliente.service';

declare var swal: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public clientes: Cliente[] = [];
  public cliente: Cliente = new Cliente();

  constructor( public _mdlClienteService: MdlClienteService,
               public _clienteService: ClienteService ) { }

  ngOnInit() {
    this.clientes = this._clienteService.clientes;
  }

  nuevoCliente() {
    this.cliente = new Cliente();
    this._mdlClienteService.mostrarModal(this.cliente, null);

  }

  editarCliente( cliente: Cliente, pos: number ) {

    this._mdlClienteService.mostrarModal(cliente, pos );

  }

  borrarCliente( cliente: Cliente, pos: number ) {

        swal( {
          title: '¿Desea borrar cliente?',
          text: cliente.nombre,
          icon: 'warning',
          buttons: true,
          dangerMode: true
        }).then(borrar => {
          if (borrar) {
            this._mdlClienteService.btnBorrar( pos );
          }
        });


  }

}
