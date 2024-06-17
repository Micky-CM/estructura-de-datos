const readline = require('node:readline')

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

// Función para mover un disco de una pila a otra
function moverDisco(origen, destino){
  let disco
  if (origen.isEmpty()){
    return "No se puede mover un disco desde una torre vacía"
  }
  if (!destino.isEmpty() && destino.peek() < origen.peek()){
    return "No se puede mover un disco grande sobre uno más pequeño"
  }

  disco = origen.pop()
  destino.push(disco)

  console.log('Estado de las torres o pilas:')
  console.log('Torre A:', pilaA)
  console.log('Torre B:', pilaB)
  console.log('Torre C:', pilaC)
  return "Movimiento realizado"
}

// Interfaz readline para recibir entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para pedir el movimiento al usuario
function preguntarMovimiento(){
  rl.question('Escribe las letras corresondientes a: la torre de origen, seguida de la torre de destino (ejemplo: A B): ', (respuesta) =>{
    const [origen, destino] = respuesta.split(' ')

    let pilaOrigen, pilaDestino
    switch (origen.toUpperCase()){
      case 'A':
        pilaOrigen = pilaA
        break
      case 'B':
        pilaOrigen = pilaB
        break
      case 'C':
        pilaOrigen = pilaC
        break
      default:
        console.log('Origen no válido')
        preguntarMovimiento()
        return
    }
    switch (destino.toUpperCase()){
      case 'A':
        pilaDestino = pilaA
        break
      case 'B':
        pilaDestino = pilaB
        break;
      case 'C':
        pilaDestino = pilaC
        break
      default:
        console.log('Destino no válido')
        preguntarMovimiento()
        return
    }
    console.log(moverDisco(pilaOrigen, pilaDestino))

// Comprueba si pilaC tiene la secuencia correcta para ganar el juego
    if (JSON.stringify(pilaC.items) === JSON.stringify([3, 2, 1])){
      console.log('¡Felicidades! Has completado el juego.')
      rl.close()
    } else{
      preguntarMovimiento()
    }
  })
}

// Inicio del juego
console.log('Bienvenido al juego de las Torres de Hanoi');
console.log('Tienes las siguientes torres o pilas:')
console.log('Pila A:', pilaA)
console.log('Pila B:', pilaB)
console.log('Pila C:', pilaC)
preguntarMovimiento()