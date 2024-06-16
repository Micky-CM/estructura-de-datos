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
    return this.items.length === 0
  }
  size(){
    return this.items.length
  }
}
let ejemploPila = new Pila()
console.log(ejemploPila.push('item1'))
console.log(ejemploPila.push('item2'))
console.log(ejemploPila.push('item3'))
console.log(ejemploPila.push('item4'))
console.log(ejemploPila.pop());
console.log(ejemploPila.peek());
console.log(ejemploPila.isEmpty());
console.log(ejemploPila.size());
