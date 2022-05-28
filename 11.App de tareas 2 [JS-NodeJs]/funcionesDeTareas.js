let tareas = require("./app-tareas/tareas.json")
let fs = require("fs"); // Requiero el módulo File System.
let guardarJSON = (datos) => fs.writeFileSync("./app-tareas/tareas.json", JSON.stringify(datos,null, 4), "utf-8"); // Necesario para guargar nuevos objetos en mi arreglo.

module.exports = {
    listar: tareas,
    listarTareas:() => {
        tareas.forEach((tarea, i) => {
            console.log(`Posición ${i}. Tarea ${i + 1}: ${tarea.titulo}`);
        })
    },
    mostrarTareas: () => { // Función para mostras las tareas y su estado.
        tareas.forEach((tarea, i) => {
            console.log("------------------------------------------------")
            console.log(`Tarea ${i + 1}: ${tarea.titulo} \nEstado: ${tarea.estado}`);
        })
        console.log("------------------------------------------------")
    },
    categorizarTareas : () => {
        tareas.forEach((tarea, i) =>  {
            console.log(`Tarea:${i+1} - "${tarea.titulo}" está clasificada como "${tarea.categoria}"`); 
        })
    },
    filtrarPorEstado: (estado) => { // Función para mostrar las tareas que tengan un estado específico.
        let tareasFiltradas = tareas.filter(filtrar => filtrar.estado.toLowerCase() === estado.toLowerCase());
        if (tareasFiltradas[0] === undefined) {
            console.log(`Actualmente no tienes tareas en estado "${estado}"`)
        };
        tareasFiltradas.forEach((tarea, i) => {
            return console.log(`${i + 1}. ${tarea.titulo} --> ${tarea.estado}.`)
        });
    },

    // JEANE TE DEJO ESTE PARA REVISAR NO VEO EL ERROR

  /*   filtrarPorCategoria: (categoria) => { // Función para mostrar las tareas que tengan un estado específico.
        let categoriasFiltradas = tareas.filter(filtrar => filtrar.categoria.toLowerCase() === categoria.toLowerCase());
        if (categoriasFiltradas[0] === undefined) {
            console.log(`Actualmente no tienes tareas con categoría "${categoria}"`)
        };
        categoriasFiltradas.forEach((tarea, i) => {
            return console.log(`${i + 1}. ${tarea.titulo} --> ${tarea.estado}.`)
        });
    }, */


    cambiarEstado: (i, estadoNuevo) => {
        if(tareas[i].estado){
            tareas[i].estado = estadoNuevo;
        }
        guardarJSON(tareas);
        return (`\n[La tarea "${tareas[i].titulo}" ha cambiado su estado a "${estadoNuevo}"]`)
    },
    agregarTarea: (titulo, estado) => { // Función para agregar una nueva tarea.
        let nuevaTarea = { // Definición de la tarea y su estado.
            titulo,
            estado
        }
        tareas.push(nuevaTarea); // Coloco la nueva tarea creada al final del arreglo.
        guardarJSON(tareas); // Actualizo el archivo .json con la nueva tarea.
        return tareas;
    },
    borrarTarea: (posicion, cant) => {  //indexOf - releer
        tareas.splice(posicion, 1) // Método de array para borrar una tarea específica.
        guardarJSON(tareas)
    },
    borrarPrimerTarea: () => {
        tareas.shift() // Método de array para borrar la primer tarea.
        guardarJSON(tareas)
    },
    borrarUltimaTarea: () => {
        tareas.pop() // Método de array para borrar última tarea.
        guardarJSON(tareas)
    }
}