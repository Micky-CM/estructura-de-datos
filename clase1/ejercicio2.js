// Ejercicio 2: Búsqueda de empleados por departamento
// Una empresa necesita obtener la lista de empleados de un departamento específico.

class Empleado{
  constructor(nombre, departamento){
  this.nombre = nombre
  this.departamento = departamento
  }
}

const planillaEmpleados = [
  new Empleado('Juan', 'Marketing'),
  new Empleado('Martha', 'Talento'),
  new Empleado('Julie', 'Contabilidad')
]


function buscarEmpleado(departamento){
  return planillaEmpleados.filter(empleado => empleado.departamento === departamento)
  //return planillaEmpleados.find(empleado => empleado.departamento === departamento)
}

buscarEmpleado('Contabilidad')