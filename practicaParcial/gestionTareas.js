const readline = require('readline')

class Tarea {
    constructor(id, descripcion, prioridad) {
        this.id = id
        this.descripcion = descripcion
        this.prioridad = prioridad
        this.completada = false
    }
}

class GestorTareas {
    constructor() {
        this.tareas = []
        this.siguienteId = 1
    }

    agregarTarea(descripcion, prioridad) {
        const tarea = new Tarea(this.siguienteId++, descripcion, prioridad)
        this.tareas.push(tarea)
    }

    eliminarTarea(id) {
        this.tareas = this.tareas.filter(tarea => tarea.id !== id)
    }

    listarTareas() {
        this.ordenarTareasPorPrioridad()
        console.log('Tareas:')
        this.tareas.forEach(tarea => {
            console.log(`ID: ${tarea.id}, Descripción: ${tarea.descripcion}, Prioridad: ${tarea.prioridad}, Completada: ${tarea.completada}`)
        })
    }

    marcarTareaComoCompletada(id) {
        const tarea = this.tareas.find(tarea => tarea.id === id)
        if (tarea) {
            tarea.completada = true
        } else {
            console.log(`Tarea con ID ${id} no encontrada.`)
        }
    }

    ordenarTareasPorPrioridad() {
        this.tareas = this._ordenarRecursivamente(this.tareas)
    }

    _ordenarRecursivamente(tareas) {
        if (tareas.length <= 1) {
            return tareas
        }

        const nuevaLista = tareas[0]
        const menores = tareas.slice(1).filter(tarea => tarea.prioridad < nuevaLista.prioridad)
        const mayores = tareas.slice(1).filter(tarea => tarea.prioridad >= nuevaLista.prioridad)

        return [...this._ordenarRecursivamente(menores), nuevaLista, ...this._ordenarRecursivamente(mayores)]
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const gestor = new GestorTareas()

function mostrarMenu() {
    console.log('\nGestor de Tareas')
    console.log('Seleccione una opción:')
    console.log('1. Agregar tarea')
    console.log('2. Eliminar tarea')
    console.log('3. Listar tareas')
    console.log('4. Marcar tarea como completada')
    console.log('5. Salir')
    rl.question('Opción: ', manejarEntrada)
}

function manejarEntrada(opcion) {
    switch (opcion) {
        case '1':
            rl.question('Descripción de la tarea: ', descripcion => {
                rl.question('Prioridad de la tarea: ', prioridad => {
                    gestor.agregarTarea(descripcion, parseInt(prioridad))
                    mostrarMenu()
                })
            })
            break
        case '2':
            rl.question('ID de la tarea a eliminar: ', id => {
                gestor.eliminarTarea(parseInt(id))
                mostrarMenu()
            })
            break
        case '3':
            gestor.listarTareas()
            mostrarMenu()
            break
        case '4':
            rl.question('ID de la tarea a marcar como completada: ', id => {
                gestor.marcarTareaComoCompletada(parseInt(id))
                mostrarMenu()
            })
            break
        case '5':
            rl.close()
            break
        default:
            console.log('Opción no válida')
            mostrarMenu()
            break
    }
}

mostrarMenu()
