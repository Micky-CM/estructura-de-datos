// Formas de declarar arrays
// Literal
let estudiantes = ['Sonia', 'Miguel', 'Nelson']

// Array constructor
let alumnos = new Array('Sonia', 'Miguel', 'Nelson', 'Raul')

//console.log(estudiantes);

// Método push -> agrega un elemento
estudiantes.push('Ignacio')
//console.log("Luego de agregar: ", estudiantes)

// Método unshift -> agrega un elemento al inicio del array
estudiantes.unshift('Raul')
//console.log("Insertando el elemento al inicio: ", estudiantes);

// Método pop -> quita el último elemento
let estudianteRetirado = estudiantes.pop()
//console.log("Estudiante retirado: ", estudianteRetirado);
//console.log("Luego de retirar el elemento: ", estudiantes)

// Método shift -> quita el primer elemento
let primerElemento = estudiantes.shift()
//console.log("Estudiante retirado: ", estudianteRetirado);
//console.log("Luego de retirar el elemento: ", estudiantes)

// Método indexOf() -> muestra el indice del elemento
let index = estudiantes.indexOf("Nelson")
//console.log("Indice del elemento: ", estudiantes)

// Método splice() -> elimina elementos y puede agregar nuevos
// splice(indice_inicio, cuantos_elementos_borrar, nuevos_Elementos)
estudiantes.splice(1, 2, 'NuevoAlumno')
//console.log("Array despues de usar splice: ", estudiantes);

// Iterar sobre un array
// Ciclo for
for (let i = 0; i < alumnos.length; i++) {
  console.log(`Estudiante ${i+1}: ${alumnos[i]}`);
}

// Ciclo forEach
alumnos.forEach((element, index)=>{
  console.log(`Estudiante ${index+1}: ${element}`);
})

// Ciclo for of
for (const alumno of alumnos) {
  console.log(`Estudiante: ${alumno}`);
}