const axios = require("axios");


const getClima =  async(lat, long) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ long }&appid=6f26253d976f81960123fc6dd8856a5f&units=metric`)

    return resp.data.main.temp;


}


module.exports = {
    getClima
}