let autos = require('./autos')

let concesionaria = {
    autos: autos,

    buscarAuto: function (patente) {
        let autoEncontrado = autos.find(auto => auto.patente == patente) // El método "find" nos devuelve un solo objeto dentro de los que estamos utilizando.        
        if (autoEncontrado) {
            return autoEncontrado
        } else {
            return null
        }
    },
    venderAuto: function (patente) {
        let auto = buscarAuto(patente)

        if (auto.vendido == false) {
            auto.vendido = true

            return auto
        }
    },
    autosParaLaVenta : function () {
        let autosNoVendidos = autos.filter(auto => auto.vendido === false)
        return autosNoVendidos
    },
    autosNuevos : function () {
        let autosParaVender = this.autosParaLaVenta()
        let autosNuevos = autosParaVender.filter(auto => auto.km < 100)
        return autosNuevos
    },
    listaDeVentas: function(){
        let autosVendidos = autos.filter(auto => auto.vendido === true)
        let precios = autosVendidos.map(auto => {
            return auto.precio
        })
        return precios
    }






}

/* console.log(concesionaria.buscarAuto('APL123')); */
/* console.log(concesionaria.venderAuto('APL123')); */
/* console.log(concesionaria.autosParaLaVenta()); */
/* console.log(concesionaria.autosNuevos()); */
/* console.log(concesionaria.listaDeVentas()); */