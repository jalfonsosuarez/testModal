import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../modelos/cliente.model';
import { MdlClienteService } from './mdl-cliente.service';

@Component({
  selector: 'app-mdl-cliente',
  templateUrl: './mdl-cliente.component.html',
  styles: []
})
export class MdlClienteComponent implements OnInit {

  public nombre: string;
  public domicilio: string;

  constructor( public _mdlClienteService: MdlClienteService) {}

  ngOnInit() {
    this._mdlClienteService.ocultarModal();
  }

}
