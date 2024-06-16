class ColaCircular {
  constructor(capacidad) {
    this.capacidad = capacidad;
    this.items = new Array(capacidad);
    this.frente = -1; // Inicialmente, la cola está vacía
    this.final = -1;  // Inicialmente, la cola está vacía
    this.size = 0;    // Tamaño inicial de la cola
  }

  enqueue(item) {
    if (this.isFull()) {
      throw new Error('La cola está llena');
    }
    if (this.isEmpty()) {
      this.frente = 0; // Si la cola estaba vacía, inicializamos frente a 0
    }
    this.final = (this.final + 1) % this.capacidad; // Avanzamos final de manera circular
    this.items[this.final] = item;
    this.size++;
    return this.items;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('La cola está vacía');
    }
    const item = this.items[this.frente];
    if (this.frente === this.final) {
      // Si la cola queda vacía después de esta operación, restablecemos frente y final a -1
      this.frente = -1;
      this.final = -1;
    } else {
      this.frente = (this.frente + 1) % this.capacidad; // Avanzamos frente de manera circular
    }
    this.size--;
    return item;
  }

  front() {
    if (this.isEmpty()) {
      throw new Error('La cola está vacía');
    }
    return this.items[this.frente];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacidad;
  }

  getSize() {
    return this.size;
  }
}

// Ejemplo de uso
const cola = new ColaCircular(5);
cola.enqueue(10);
cola.enqueue(20);
cola.enqueue(30);
console.log(cola.dequeue()); // 10
console.log(cola.front()); // 20
console.log(cola.isEmpty()); // false
console.log(cola.isFull()); // false
cola.enqueue(40);
cola.enqueue(50);
cola.enqueue(60);
console.log(cola.isFull()); // true
