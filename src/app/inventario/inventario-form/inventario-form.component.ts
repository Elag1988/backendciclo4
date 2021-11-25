import { Component, OnInit } from '@angular/core';
import { IInventario } from '../interfaces/inventario.interfaces';

@Component({
  selector: 'app-inventario-form',
  templateUrl: './inventario-form.component.html',
  styleUrls: ['./inventario-form.component.css']
})
export class InventarioFormComponent implements OnInit {

  producto: IInventario =  {
    nombre: '',
    photoUrl: '',
    precioDeVenta: 0,
    precioDeCompra: 0,
    stock: 0,
    descuento: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  createProduct(){
    console.log(this.producto)
  }

}
