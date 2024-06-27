class Nodo {
    constructor(data) {
        this.data = data;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    // Añadir un nodo al final de la lista
    insertarFin(data) {
        let newNodo = new Nodo(data);
        if (this.cabeza === null) {
            this.cabeza = newNodo;
        } else {
            let nodoActual = this.cabeza;
            while (nodoActual.siguiente !== null) {
                nodoActual = nodoActual.siguiente;
            }
            nodoActual.siguiente = newNodo;
        }
    }

    // Añadir un nodo al inicio de la lista
    insertarInicio(data) {
        let newNodo = new Nodo(data);
        newNodo.siguiente = this.cabeza;
        this.cabeza = newNodo;
    }

    // Eliminar un nodo con un valor específico
    eliminar(data) {
        if (this.cabeza === null) return;

        if (this.cabeza.data === data) {
            this.cabeza = this.cabeza.siguiente;
            return;
        }

        let nodoActual = this.cabeza;
        while (nodoActual.siguiente !== null) {
            if (nodoActual.siguiente.data === data) {
                nodoActual.siguiente = nodoActual.siguiente.siguiente;
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
let list = new ListaEnlazada();
list.insertarFin(10);
list.insertarFin(20);
list.insertarInicio(5);
list.imprimirLista();  // Output: 5 -> 10 -> 20
list.eliminar(10);
list.imprimirLista();  // Output: 5 -> 20
console.log(list.buscar(20));  // Output: Nodo { data: 20, siguiente: null }
