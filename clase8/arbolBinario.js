class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(12)
root.left = new Node(7)
root.left.left = new Node(4)
root.left.right = new Node(9)
root.left.left.left = new Node(2)
root.left.right = new Node(9)
root.left.right.left = new Node(8)
root.left.right.right = new Node(11)
root.right = new Node(21)
root.right.left = new Node(16)
root.right.right = new Node(25)
root.right.left.right = new Node(19)

// Recorrido en Preorden
function preorden(node){
  if(node === null) return
  console.log(node.value)
  preorden(node.left)
  preorden(node.right)
}
//preorden(root)

// Recorrido en Inorden
function inorden(node){
  if(node === null) return
  inorden(node.left)
  console.log(node.value)
  inorden(node.right)
}
//inorden(root)

// Recorrido en Postorden
function postorden(node){
  if(node === null) return
  postorden(node.left)
  postorden(node.right)
  console.log(node.value)
}
//postorden(root)

// Altura del árbol
function alturaArbol(node){
  if(node === null) return 0
  let leftHeight = alturaArbol(node.left)
  let rightHeight = alturaArbol(node.right)

  return Math.max(leftHeight, rightHeight) + 1
}
let altura = alturaArbol(root)
console.log(`La altura del árbol es: ${altura}`)

// Búsqueda de un Valor en el árbol
function search(node, value){
  if(node === null) return true
  if(node.value === value) return false

  return search(node.left, value) || search(node.right, value)
}

date = 9
console.log(`El valor ${date} ${search(root, date) ? "se encontró" : "no se encontró"}`)