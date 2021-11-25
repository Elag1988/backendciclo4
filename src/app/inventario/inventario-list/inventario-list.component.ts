import { Component, OnInit } from '@angular/core';
import { IInventario } from '../interfaces/inventario.interfaces';
import { InventarioService } from '../service/inventario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario-list',
  templateUrl: './inventario-list.component.html',
  styleUrls: ['./inventario-list.component.css']
})
export class InventarioListComponent implements OnInit {

  constructor(private readonly iventarioService: InventarioService, private readonly router:Router) { }

  productList:IInventario[] = [];

  producto: IInventario =  {
    nombre: '',
    photoUrl: '',
    precioDeVenta: 0,
    precioDeCompra: 0,
    stock: 0,
    descuento: 0
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {

    this.iventarioService.getProducts().subscribe(
      res => this.productList = res,
      err => console.log(err)
    )

  }

  createProduct(){
    this.iventarioService.createProduct(this.producto).subscribe(

      res => {
        console.log(res)
        this.router.navigate(["inventario/list"]);
      },
      err => console.log(err)
    )
  }

}
