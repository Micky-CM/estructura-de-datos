// Invertir un array

class Pila{
  constructor(){
    this.items = []
  }
  push(item){
    this.items.push(item)
    return this.items
  }
  pop(){
    this.items.pop()
    return this.items
  }
  peek(){
    return this.items[this.items.length -1]
  }
  isEmpty(){
    return this.items.length === 0 ? 'Está vacía' : 'No está vacía'
  }
  size(){
    return this.items.length
  }
}
const ejemploPila = new Pila()

console.log(ejemploPila.push('manzana'))
console.log(ejemploPila.push('naranja'))
console.log(ejemploPila.push('banana'))
console.log(ejemploPila.push('frutilla'))

//const pilaInvertida = ejemploPila.items.reverse()
//console.log(pilaInvertida)

//console.log(ejemploPila.items.toReversed())

function invertirStrings(){
  for(let i = 0; i < ejemploPila.length; i++) {
    const itemInv = ejemploPila.items[i].reverse()
    return console.log(itemInv)
  }
}
invertirStrings()