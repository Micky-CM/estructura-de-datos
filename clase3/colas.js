class Cola{
  constructor(){
    this.items = []
  }
  enqueue(item){
    this.items.push(item)
    return this.items
  }
  dequeue(){
    this.items.shift()
    return this.items
  }
  front(){
    return this.items[0]
  }
  isEmpty(){
    return this.items.length === 0 ? 'Está vacía' : 'No está vacía'
  }
  size(){
    return this.items.length
  }
}
let ejemploCola = new Cola()
console.log(ejemploCola.enqueue('item1'))
console.log(ejemploCola.enqueue('item2'))
console.log(ejemploCola.enqueue('item3'))
console.log(ejemploCola.enqueue('item4'))
console.log(ejemploCola.dequeue());
console.log(ejemploCola.front());
console.log(ejemploCola.isEmpty());
console.log(ejemploCola.size());
