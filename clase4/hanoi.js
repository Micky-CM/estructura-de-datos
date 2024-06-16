class Pila{
  constructor(items){
    this.items = items
  }
  push(item){
    return this.items.push(item)
  }
  pop(){
    return this.items.pop()
  }
  peek(){
    return this.items[this.items.length -1]
  }
  isEmpty(){
    return this.items.length === 0
  }
  size(){
    return this.items.length
  }
}
const pilaA = new Pila([3, 2, 1])
const pilaB = new Pila([])
const pilaC = new Pila([])
let discos = 3

console.log(pilaA)
console.log(pilaB)
console.log(pilaC)

function moverDisco(origen, destino){
  let disco
  if(origen.isEmpty() || destino.peek() > origen.peek()){
    return "No se puede realizar el movimiento"
  } if(destino.isEmpty() || destino.peek() < origen.peek()){
    disco = origen.pop()
    destino.push(disco)

    console.log(pilaA)
    console.log(pilaB)
    console.log(pilaC)
  }
}

moverDisco(pilaA, pilaB)