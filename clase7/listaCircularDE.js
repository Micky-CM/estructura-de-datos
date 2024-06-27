class Nodo {
  constructor(data) {
    this.data = data;
    this.siguiente = null;
    this.anterior = null;
  }
}

class ListaCircularDE {
  constructor() {
    this.cabeza = null;
  }

  // Añadir un nodo al final de la lista
  insertarFin(data) {
    let newNodo = new Nodo(data);
    if (this.cabeza === null) {
      this.cabeza = newNodo;
      newNodo.siguiente = this.cabeza;
      newNodo.anterior = this.cabeza;
    } else {
      let ultimo = this.cabeza.anterior;
      ultimo.siguiente = newNodo;
      newNodo.anterior = ultimo;
      newNodo.siguiente = this.cabeza;
      this.cabeza.anterior = newNodo;
    }
  }

  // Añadir un nodo al inicio de la lista
  insertarInicio(data) {
    let newNodo = new Nodo(data);
    if (this.cabeza === null) {
      this.cabeza = newNodo;
      newNodo.siguiente = this.cabeza;
      newNodo.anterior = this.cabeza;
    } else {
      let ultimo = this.cabeza.anterior;
      newNodo.siguiente = this.cabeza;
      newNodo.anterior = ultimo;
      this.cabeza.anterior = newNodo;
      ultimo.siguiente = newNodo;
      this.cabeza = newNodo;
    }
  }

  // Eliminar un nodo con un valor específico
  eliminar(data){
    if(this.cabeza === null) return;

    let nodoActual = this.cabeza;
    do{
      if(nodoActual.data === data){
        if (nodoActual.siguiente === nodoActual) {
          this.cabeza = null;
        } else {
          nodoAtual.anterior.siguiente = nodoActual.siguiente;
          nodoActual.siguiente.anterior = nodoActual.anterior;
          if (nodoActual === this.cabeza) {
            this.cabeza = nodoActual.siguiente;
          }
        }
        return;
      }
      nodoActual = nodoActual.siguiente;
    } while (nodoActual !== this.cabeza);
  }

  // Buscar un nodo con un valor específico
  buscar(data){
    if (this.cabeza === null) return null;

    let nodoActual = this.cabeza;
    do{
      if(nodoActual.data === data){
        return nodoActual;
      }
      nodoActual = nodoActual.siguiente;
    } while(nodoActual !== this.cabeza);

    return null;
  }

  // Imprimir la lista
  imprimirLista(){
    if (this.cabeza === null) return;

    let nodoActual = this.cabeza;
    let lista = [];
    do{
      lista.push(nodoActual.data);
      nodoActual = nodoActual.siguiente;
    } while(nodoActual !== this.cabeza);

    console.log(lista.join(' -> '));
  }

  // Imprimir lista invertida
  imprimirListaInvertida(){
    if (this.cabeza === null) return;

    let nodoActual = this.cabeza;
    let lista = [];
    do{
      lista.push(nodoActual.data);
      nodoActual = nodoActual.siguiente;
    } while(nodoActual !== this.cabeza);

    let listaInvertida = []
    for (let i = lista.length - 1; i >= 0; i--) {
        listaInvertida.push(lista[i])
    }
    console.log(listaInvertida.join(' -> '));
  }
}


// Ejemplo de uso
let list = new ListaCircularDE();
list.insertarFin(10);
list.insertarFin(20);
list.insertarInicio(5);
list.imprimirLista();  // Output: 5 -> 10 -> 20
list.imprimirListaInvertida();
//list.eliminar(10);
//list.imprimirLista();  // Output: 5 -> 20
//console.log(list.buscar(20));  // Output: Nodo { data: 20, siguiente: Nodo { data: 5, siguiente: [Circular], anterior: [Circular] }, anterior: Nodo { data: 5, siguiente: [Circular], anterior: [Circular] } }
