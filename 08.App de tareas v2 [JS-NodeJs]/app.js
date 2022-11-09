let {argv} = require("process");
let {listar,listarTareas,agregarTarea} = require("./funcionesDeTareas");

switch (argv[2]) {
    case "leer":
        console.log(listar); // Muestro los objetos literales.
        break;
    case "listar":
        console.log();
        listarTareas(); // Muestro las tareas en forma de lista.
        break;
    case "agregar":
        let titulo = argv[3]; // Guargo el titulo de la tarea en la posición 3
        let estado = argv[4]; // Guargo el estado de la tarea en la posición 4
        console.log(agregarTarea(titulo, estado)); // Acción para agregar una nueva tarea.
        break;
    case undefined: 
        console.log("Debe introducir una acción, consulte la lista de comandos [node app comandos]");
        break;
    case 'comandos':
        console.log();
        console.log("Comandos disponibles: \n \n- node app leer\n- node app listar\n- node app agregar");
        break;
    default:
        console.log("Acción incorrecta, consulte la lista de comandos [node app comandos]");
        break;
}