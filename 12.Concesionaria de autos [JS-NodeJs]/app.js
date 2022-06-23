let autos = require('./autos')

let concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        let autoEncontrado = autos.find(auto => auto.patente == patente)
        return autoEncontrado ? autoEncontrado : null
    },
    venderAuto: function (patente) {
        let autoAVender = this.buscarAuto(patente)
        return autoAVender.vendido = true 
    },
    autosParaLaVenta: function () {
        return autos.filter(auto => !auto.vendido)
    },
    autosNuevos: function(){
        return autosParaLaVenta().filter(auto => auto.km < 100)
    },
    listaDeVentas: function(){
        let autosVendidos = autos.filter(auto => auto.vendido === true)
        return autosVendidos.map(auto => auto.precio)
    }


}

/* console.log(concesionaria.buscarAuto('APL123')); */
/* console.log(concesionaria.venderAuto('APL123')); */
/* console.log(concesionaria.autosParaLaVenta()); */
/* console.log(concesionaria.autosNuevos()); */
/* console.log(concesionaria.listaDeVentas()); */