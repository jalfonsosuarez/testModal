import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MdlClienteComponent } from './modals/mdl-cliente/mdl-cliente.component';
import { MdlClienteService } from './modals/mdl-cliente/mdl-cliente.service';
import { ClienteService } from '../services/cliente/cliente.service';



@NgModule({
  declarations: [
    HomeComponent,
    MdlClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [MdlClienteService, ClienteService]
})

export class PagesModule { }

