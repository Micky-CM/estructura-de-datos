class Cola{
  constructor(items){
    this.items = items
  }
  enqueue(item){
    return this.items.push(item)
  }
  dequeue(){
    this.items.isEmpty() ? 'Cola vacia' : this.items.shift()
    return this.items
  }
  front(){
    return this.items[0]
  }
  isEmpty(){
    return this.items.length === 0
  }
  size(){
    return this.items.length
  }
}
const cola1 = new Cola([3,4,2,8,12])
const cola2 = new Cola([9,6,11,19,15])

console.log(cola1);
console.log(cola2);

function sumarColas(cola1, cola2){
  const sumas = new Cola()
  while(!sumas.isEmpty){
    
  }
}
sumarColas()