

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require("yargs").options({
    direccion:{
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLong(argv.direccion)
//     .then( console.log );
    
// clima.getClima(40.6943, -73.9249)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) =>{

    try {
        const cord = await lugar.getLugarLatLong(direccion);
        const resp = await clima.getClima( cord.lat, cord.long ); 
        return `La temperatura de ${cord.direccion} es de ${ resp }`;
    } catch (error) {
        return `No se pudo obtenr el clima de ${ direccion }`
    }
    
   
    
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)


