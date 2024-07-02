class Nodo{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class ArbolBinarioBusqueda{
  constructor(){
    this.raiz = null
  }

  // Inserción
  insertar(value){
    const nuevoNodo = new Nodo(value)
    if(this.raiz === null){
      this.raiz = nuevoNodo
    } else{
      this.insertarNodo(this.raiz, nuevoNodo)
    }
  }
  insertarNodo(nodo, nuevoNodo){
    if(nuevoNodo.value < nodo.value){
      if(nodo.left === null){
        nodo.left = nuevoNodo
      } else{
        this.insertarNodo(nodo.left, nuevoNodo)
      }
    } else{
      if(nodo.right === null){
        nodo.right = nuevoNodo
      } else{
        this.insertarNodo(nodo.right, nuevoNodo)
      }
    }
  }

  // Búsqueda
  buscar(value){
    return this.buscarNodo(this.raiz, value)
  }
  buscarNodo(nodo, value){
    if(nodo === null) return null
    if(value < nodo.value){
      return this.buscarNodo(nodo.left, value)
    } else if(value > nodo.value){
      return this.buscarNodo(nodo.right, value)
    } else{
      return nodo
    }
  }

  // Eliminar
  eliminar(value){
    this.raiz = this.eliminarNodo(this.raiz, value)
  }
  eliminarNodo(nodo, value){
    if(nodo === null) return null
    if(value < nodo.value){
      nodo.left = this.eliminarNodo(nodo.left, value)
      return nodo
    } else if(value > nodo.value){
      nodo.right = this.eliminarNodo(nodo.right, value)
      return nodo
    } else{
      // Nodo sin hijos
      if(nodo.left === null && nodo.right === null){
        nodo = null
        return nodo
      }
      // Nodo con un hijo
      if(nodo.left === null){
        nodo = nodo.right
        return nodo
      } else if(nodo.right === null){
        nodo = nodo.left
        return nodo
      }
      // Nodo con dos hijos
      const aux = this.nodoMinimo(nodo.right)
      nodo.value = aux.value
      nodo.right = this.eliminarNodo(nodo.right, aux.value)
      return nodo
    }
  }
  nodoMinimo(nodo){
    while(nodo.left !== null){
      nodo = nodo.left
    }
    return nodo
  }
  // Imprimir árbol
  imprimir(nodo = this.raiz){
    if(nodo !== null){
      this.imprimir(nodo.left)
      console.log(nodo.value)
      this.imprimir(nodo.right)
    }
  }
}


// Ejemplo
const abb = new ArbolBinarioBusqueda()
// Insertar nodos
abb.insertar(10)
abb.insertar(5)
abb.insertar(15)
abb.insertar(3)
abb.insertar(7)
abb.insertar(12)
abb.insertar(18)

abb.imprimir()
// Buscar nodos
console.log("Buscar 7:", abb.buscar(7) ? "Encontrado" : "No encontrado")
console.log("Buscar 20:", abb.buscar(20) ? "Encontrado" : "No encontrado")
// Eliminar nodos
console.log("Eliminar nodo 15")
abb.eliminar(15)
abb.imprimir()
