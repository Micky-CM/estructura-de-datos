// Ejercicio 1: Gestión de inventario de productos
// Una empresa necesita mantener un registro de sus productos en stock. Cada producto tiene un nombre y una cantidad en stock

class Producto {
  constructor(nombre, cantidad){
    this.nombre = nombre
    this.cantidad = cantidad
  }
}

const inventario = [
  new Producto('producto1', 5),
  new Producto('producto2', 8),
  new Producto('producto3', 4)
]

inventario.forEach((producto, index)=>{
  console.log('Inventario de productos');
  console.log(`Producto ${index+1}: ${producto.nombre} - Cantidad: ${producto.cantidad}`);
})