export interface IInventario {
    
    idProducto?: number,
    nombre: string,
    photoUrl: string,
    precioDeVenta: number,
    precioDeCompra: number,
    stock: number,
    descuento: number
}