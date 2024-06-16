// Lista enlazada
// Secuencia de nodos enlazados a los siguientes nodos

class Nodo{
  constructor(dato, siguiente){
    this.dato = dato,
    this.siguiente = undefined
  }
}

class ListaEnlazada{
  constructor(){
    this.cabeza = undefined
  }
  agregar(dato){
    let nuevoNodo = new Nodo(dato)
    nuevoNodo.siguiente = this.cabeza
    this.cabeza = nuevoNodo
  }
}

let lista = new ListaEnlazada()
lista.agregar(3)
lista.agregar(2)
lista.agregar(1)

console.log(lista);
