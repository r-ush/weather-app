const request = require('postman-request');

const url='http://api.weatherstack.com/current?access_key=9486e4264deeb3c64d2c63c2f81ac04f&query=London,%20United%20Kingdom&units=m'

request({url:url, json:true},(error, response)=>{
    console.log(response.body.current.weather_descriptions+'. It is '+response.body.current.temperature+' degrees out there, but it feels like '+response.body.current.feelslike+' degree celsius')
})