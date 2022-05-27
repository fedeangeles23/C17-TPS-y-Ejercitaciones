let {argv} = require("process");
let {listar,mostrarTareas,listarTareas,agregarTarea, borrarPrimerTarea, borrarUltimaTarea, borrarTarea} = require("./funcionesDeTareas");

switch (argv[2]) {
    case "leer": // Acción para leer los objetos literales del arreglo.
        console.log(listar); // Muestro los objetos literales.
        break;
    case "tareas": // Acción para mostrar las tareas disponibles.
        console.log(`\n[T A R E A S   D I S P O N I B L E S] \n`);
        mostrarTareas() // Función simple que muestra las tareas disponibles y su estado.
        break;
    case "listar": // Acción para listar las tareas y ver su posición.
        console.log(`\n[P O S I C I Ó N   E N   E L   A R R E G L O] \n`);
        listarTareas(); // // Función que muestra la posicón en el arreglo de cada tarea.
        break;
    case "agregar": // Acción para agregar una nueva tarea.
        let titulo = argv[3]; // Guargo el titulo de la tarea en la posición 3
        let estado = argv[4]; // Guargo el estado de la tarea en la posición 4
        console.log(agregarTarea(titulo, estado)); 
        console.log(`\n[Tarea agregada]`);
        break;
    case "borrar-p": // Acción que borra la primer tarea de la lista.
        borrarPrimerTarea(); // Función simple que borra la primer tarea.
        break;
    case "borrar": // Acción que borra la tarea deseada.
        posicion = argv[3]
        borrarTarea(posicion,1) // Función simple que borra la tarea deseada indicando su posición.
        console.log(`\n[Tarea borrada]`);
        break;
    case "borrar-u": // Acción que borra la última tarea de la lista.
        borrarUltimaTarea() // Función simple que borra la última tarea.
        break;
    case 'comandos':  // Acción que sirve para ver la lista de comandos.
        console.log();
        console.log("\n[C O M A N D O S   D I S P O N I B L E S] \n \n- node app leer \n- node app tareas\n- node app listar\n- node app agregar\n- node app borrar\n- node app borrar-u\n- node app borrar-p");
        break;
    case 'ayuda': // Descripción de las acciones disponibles.
        console.log(`\n[S E C C I Ó N   D E   A Y U D A]\n`);
        console.log(`LEER:\n\nLa acción "leer" permite ver la información que hay dentro de los objetos literales del arreglo.\nSe accede con el comando [node app leer]\n`);
        console.log(`LISTAR:\n\nLa acción "listar" permite ver en la posición de cada tarea en forma de lista. Esto, con el fin de conocer la posición de la tarea que querramos eliminar o bien, la ubicación de dos tareas para colocar una nueva tarea intermedia.\nSe accede con el comando [node app listar]\n`);
        console.log(`AGREGAR:\n\nLa acción "agregar permite agregar una tarea nueva y su estado a final del arreglo.\nSe accede con el comando [node app agregar + titulo: estado:] indicando el título y el estado respectivamente.\n`);
        console.log(`BORRAR:\n\nLa acción "borrar" permite eliminar un objeto deseado en la posición que se le indique por terminal.\nSe accede con el comando [node app borrar + posición]. Se debe indicar la posición con el valor númerico correspondiente del [0,1,2...].\nRecomendación: Ejecutar previamente la acción "listar" para conocer la posicón exacta del objeto que se desee eliminar.\n`);
        console.log(`BORRAR-P:\n\nLa acción "borrar-p" elimina el primer objeto del arreglo.\nSe accede con el comando [node app borrar-p]\n`);
        console.log(`BORRAR-U:\n\nLa acción "borrar-u" elimina el objeto al final del arreglo.\nSe accede con el comando [node app borrar-u]\n`);
        console.log(`COMANDOS:\n\nLa acción "comandos" muestra la lista de comandos disponibles.\nSe accede con el comando [node app comandos]\n`);
        console.log(`UNDEFINED:\n\nSi no se realiza una acción al indicar la instrucción "node app" la terminal devolvera un mensaje con información con la lista de comandos disponibles.\n`);
    break;
    case undefined: // Mensaje que informa que no se introdujo una acción.
        console.log("Debe introducir una acción, consulte la lista de comandos [node app comandos]");
        break;
    default:  // Mensaje que se muestra por defecto.
        console.log(`Acción incorrecta, consulte la lista de comandos con [node app comandos]. \n Para mas información consulte por terminal introduciendo el comando [node app ayuda]`);
        break;
}