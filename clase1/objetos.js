class Persona{
  nombre
  edad

  constructor(name, age){
    this.nombre = name
    this.edad = age
  }
  hablar(){
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const jorge = new Persona("Jorge", 20)
jorge.hablar()