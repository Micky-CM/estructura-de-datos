/* Opciones del to do listaTareas
1. Crear un nuevo tablero
2. Agregar tarea a un tablero
3. Mover tarea entre tableros
4. Mostrar tableros y tareas
5. Salir*/

class Tablero{
  constructor(nombreTablero){
    this.nombreTablero = nombreTablero,
    this.tareasTablero = []
  }
  agregarTarea(){
    listaTareas.push(new Tarea(nombreTarea, prioridadTarea))
  }
  eliminarTarea(){
    listaTareas.splice(i)
  }
}

class Tarea{
  constructor(descripcion, prioridad){
    this.descripcion = descripcion,
    this.prioridad = prioridad
  }
}

function crearTablero(){
  
}