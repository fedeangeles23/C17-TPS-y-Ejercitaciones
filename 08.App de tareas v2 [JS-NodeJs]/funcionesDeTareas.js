let tareas = require("./app-tareas/tareas.json")
let fs = require("fs") // Requiero el módulo File System.
let guardarJSON = (datos) => fs.writeFileSync("./app-tareas/tareas.json", JSON.stringify(datos,null,4),"utf-8"); // Necesario para guargar nuevos objetos en mi arreglo.

module.exports = {
    listar: tareas,
    listarTareas: () => {
        for (let i = 0; i < tareas.length; i++) {
            console.log("-----------------------------------------------------")//Separador entre tareas
            console.log(`Tarea ${i+1}: ${tareas[i].titulo} \nEstado: ${tareas[i].estado}`);     
        }
        console.log("-----------------------------------------------------")//Separador entre tareas
    },
    agregarTarea: (titulo, estado) => { // Función para agregar una nueva tarea.
        let nuevaTarea = { // Definición de la tarea y su estado.
            titulo,
            estado
        }
        tareas.push(nuevaTarea); // Coloco la nueva tarea creada al final del arreglo.
        guardarJSON(tareas); // Actualizo el archivo .json con la nueva tarea.
        return tareas;
    } 
}