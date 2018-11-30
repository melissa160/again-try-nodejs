
const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
    desc: 'direccion de la ciudad para optener clima',
    demand: true
}
}
).argv

let getInfo = async(direccion) =>{
try{
    let coors = await lugar.getLugarLatLng(direccion)
    let temp = await clima.getClima(coors.lat, coors.lng)

    return `El clima en ${coors.direccion} es de ${temp}`
} catch {
    return `No se pudo determinar el clima en ${direccion}`
}
}

getInfo(argv.direccion)
.then(msj => console.log(msj))
.catch(e => console.log(e))

// lugar.getLugarLatLng(argv.direccion)
// .then(resp => console.log(resp))
// .catch(e => console.log(e))

// clima.getClima(35, 139)
// .then(tmp => console.log(tmp))
// .catch(e => console.log(e))