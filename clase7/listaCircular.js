class Nodo {
  constructor(data) {
    this.data = data;
    this.siguiente = null;
  }
}

class ListaEnlazadaCircular {
  constructor() {
    this.cabeza = null;
  }

  // Añadir un nodo al final de la lista
  insertarFin(data){
    let newNodo = new Nodo(data);
    if (this.cabeza === null){
      this.cabeza = newNodo;
      newNodo.siguiente = this.cabeza
    } else{
      let nodoActual = this.cabeza;
      while(nodoActual.siguiente !== this.cabeza){
          nodoActual = nodoActual.siguiente;
      }
      nodoActual.siguiente = newNodo;
      newNodo.siguiente = this.cabeza
    }
  }

  // Añadir un nodo al inicio de la lista
  insertarInicio(data) {
    let newNodo = new Nodo(data);

    if(this.cabeza === null){
      this.cabeza = newNodo;
      this.cabeza.siguiente = this.cabeza;
    } else{
      let nodoActual = this.cabeza;
      while(nodoActual.siguiente !== this.cabeza){
        nodoActual = nodoActual.siguiente;
      }
      newNodo.siguiente = this.cabeza;
      this.cabeza = newNodo;
      nodoActual.siguiente = this.cabeza;
    }
  }

  // Eliminar un nodo con un valor específico
  eliminar(data) {
    if (this.cabeza === null) return;

    if (this.cabeza.data === data){
      if (this.cabeza.siguiente === this.cabeza){
        this.cabeza = null;
      } else{
        let nodoActual = this.cabeza;
        while (nodoActual.siguiente !== this.cabeza) {
          nodoActual = nodoActual.siguiente;
        }
        this.cabeza = this.cabeza.siguiente;
        nodoActual.siguiente = this.cabeza;
      }
      return;
    } else{
      let nodoActual = this.cabeza;
      while(nodoActual.siguiente !== this.cabeza){
        if (nodoActual.siguiente.data === data){
          nodoActual.siguiente = nodoActual.siguiente.siguiente;
          return;
        }
        nodoActual = nodoActual.siguiente;
      }
    }
  }

  // Buscar un nodo con un valor específico
  buscar(data){
    if (this.cabeza === null) return null;

    let nodoActual = this.cabeza;
    do {
      if (nodoActual.data === data) {
          return nodoActual;
      }
      nodoActual = nodoActual.siguiente;
    } while (nodoActual !== this.cabeza);
    return null;
  }

  // Imprimir la lista
  imprimirLista(){
    if (this.cabeza === null) return;

    let nodoActual = this.cabeza;
    let result = [];
    do {
      result.push(nodoActual.data);
      nodoActual = nodoActual.siguiente;
    } while (nodoActual !== this.cabeza);
    console.log(result.join(' -> '));
  }
}

// Ejemplo de uso
let list = new ListaEnlazadaCircular();
list.insertarFin(10);
list.insertarFin(20);
list.insertarInicio(5);
list.imprimirLista();  // Output: 5 -> 10 -> 20
list.eliminar(10);
list.imprimirLista();  // Output: 5 -> 20
console.log(list.buscar(20));  // Output: Nodo { data: 20, siguiente: null }
