const axios = require('axios')

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=dcdccf0eecb1a295b4edeb85aa178313`)

    console.log(resp.data.main.temp, 'aaaaaa')
    return resp.data.main.temp
}

module.exports = {
    getClima
}