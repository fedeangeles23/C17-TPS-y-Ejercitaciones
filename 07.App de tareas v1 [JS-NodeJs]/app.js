let {argv} = require("process");
let {listar, listarTareas,} = require("./funcionesDeTareas");

switch (argv[2]) {
    case "leer":
        console.log(listar); // Muestro los objetos literales.
        break;
    case "listar":
        console.log();
        listarTareas(); // Muestro las tareas en forma de lista
        break;
    case undefined: 
        console.log("Debe introducir una acción, consulte la lista de comandos [node app comandos]");
        break;
    case 'comandos':
        console.log();
        console.log("Comandos disponibles: \n \n- node app leer\n- node app listar");
        break;
    default:
        console.log("Acción incorrecta, consulte la lista de comandos [node app comandos]");
        break;
}