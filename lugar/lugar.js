const axios = require("axios");

const getLugarLatLong = async( ciudad ) => {

    const encodeUrl = encodeURI(ciudad);

    const instace = axios.create({
        baseURL: `https://city-by-api-ninjas.p.rapidapi.com/v1/city?name=${encodeUrl}`,
        headers: {'x-rapidapi-key': '953f8179b8mshd939b168c83cefap109ca6jsn8a8f0366d03c'},

    });

    const resp = await instace.get()
    

    if(resp.data[0].length === 0){
        throw new error(`No hay resultados para ${ ciudad }`);
    }

    const data = resp.data[0];

    const direccion = data.name;
    const lat = data.latitude;
    const long = data.longitude;

    return {
        direccion,
        lat,
        long,
    }
}

module.exports = {
    getLugarLatLong
} 
 