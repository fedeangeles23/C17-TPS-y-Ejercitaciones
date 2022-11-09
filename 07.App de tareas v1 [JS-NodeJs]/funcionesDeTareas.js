let tareas = require("./app-tareas/tareas.json")

module.exports = {
    listar: tareas,
    listarTareas: () => {
        for (let i = 0; i < tareas.length; i++) {
            console.log("-----------------------------------------------------")//Separador entre tareas
            console.log(`Tarea ${i+1}: ${tareas[i].titulo} \nEstado: ${tareas[i].estado}`);
            
        }
        console.log("-----------------------------------------------------")//Separador entre tareas
    }
}