import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { IInventario } from '../interfaces/inventario.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  API_URL:string = "http://localhost:3000";

  constructor(private readonly httpClient: HttpClient) { }

  getProducts():Observable<IInventario[]>{
    return this.httpClient.get<IInventario[]>(`${this.API_URL}/inventario`);
  }

  getProductById(productId:string):Observable<IInventario>{
    return this.httpClient.get<IInventario>(`${this.API_URL}/inventario/${productId}`);
  }

  createProduct(product: IInventario):Observable<IInventario>{
    return this.httpClient.post<IInventario>(`${this.API_URL}/inventario/create`, product);
  }

  updateProduct(productId:string ,product: IInventario):Observable<IInventario>{
    return this.httpClient.put<IInventario>(`${this.API_URL}/inventario/update/${productId}`, product);
  }

  deleteProduct(productId:string):Observable<IInventario>{
    return this.httpClient.delete<IInventario>(`${this.API_URL}/inventario/delete/${productId}`);
  }
}
