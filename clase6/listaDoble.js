class Nodo{
  constructor(data){
    this.data = data;
    this.siguiente = null;
    this.anterior = null;
  }
}

class ListaDobleEnlazada{
  constructor() {
    this.cabeza = null;
    this.cola = null;
  }

  // Añadir un nodo al final de la lista
  insertarFin(data) {
    let newNodo = new Nodo(data);
    if (this.cabeza === null) {
      this.cabeza = newNodo;
      this.cola = newNodo;
    } else {
        this.cola.siguiente = newNodo;
        newNodo.anterior = this.cola;
        this.cola = newNodo;
    }
  }

  // Añadir un nodo al inicio de la lista
    insertarInicio(data){
    let newNodo = new Nodo(data);
        if (this.cabeza === null) {
        this.cabeza = newNodo;
        this.cola = newNodo;
        } else {
        newNodo.siguiente = this.cabeza;
        this.cabeza.anterior = newNodo;
        this.cabeza = newNodo;
        }
    }

   // Eliminar un nodo con un valor específico
   eliminar(dato) {
    // Validamos si la lista esta vacia
    if (this.cabeza === null) return;

    let nodoActual = this.cabeza;
    while (nodoActual !== null) {
        // Validamos si el nodo actual o nodoActual tiene el dato = al que buscamos eliminar
        if (nodoActual.dato === dato) {
            // Validar si el anterior es distinto a nulo
            if (nodoActual.anterior !== null) {
                //nodoActual.anterior.siguiente = nodoActual.siguiente;
                let anterior = nodoActual.anterior;
                let siguiente = nodoActual.siguiente;
                anterior.siguiente = siguiente;

            } else {
                //Si el anterior es nulo significa que estamos en la cabeza
                this.cabeza = nodoActual.siguiente;
            }
            // Validar si el siguiente es distinto a nulo
            if (nodoActual.siguiente !== null) {
                //nodoActual.siguiente.anterior = nodoActual.anterior;
                let siguiente = nodoActual.siguiente;
                let anterior = nodoActual.anterior;

                siguiente.anterior = anterior;

            } else {
                //Si el siguiente es nulo significa que estamos en la cola
                this.cola = nodoActual.anterior;
            }
            return;
        }
        nodoActual = nodoActual.siguiente;
    }
}


  // Buscar un nodo con un valor específico
  buscar(data) {
      let nodoActual = this.cabeza;
      while (nodoActual !== null) {
          if (nodoActual.data === data) {
              return nodoActual;
          }
          nodoActual = nodoActual.siguiente;
      }
      return null;
  }

  // Imprimir la lista
  imprimirLista() {
      let nodoActual = this.cabeza;
      let result = [];
      while (nodoActual !== null) {
          result.push(nodoActual.data);
          nodoActual = nodoActual.siguiente;
      }
      console.log(result.join(' -> '));
  }
}

// Ejemplo de uso
let list = new ListaDobleEnlazada();
list.insertarFin(10);
list.insertarFin(20);
list.insertarInicio(8);
list.insertarInicio(5);

// Imprimir la lista
list.imprimirLista();  // Output: 5 -> 8 -> 10 -> 20

// Eliminar un nodo
list.eliminar(10);

// Imprimir la lista
list.imprimirLista();  // Output: 5 -> 8 -> 20

// Buscar un nodo
console.log(list.buscar(8));  // Output: Nodo { data: 20, siguiente: null, anterior: Nodo  }

