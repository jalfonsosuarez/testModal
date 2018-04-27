import { Telefono } from './telefono.model';

export class Cliente {

    public nombre: string;
    public domicilio: string;
    public telefonos: Telefono[];

    constructor() {
        this.nombre = '';
        this.domicilio = '';
        this.telefonos = [];
    }
}

