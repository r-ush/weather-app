const request = require('postman-request');

const url='http://api.weatherstack.com/current?access_key=9486e4264deeb3c64d2c63c2f81ac04f&query=New%20York'

request({url:url, json:true},(error, response)=>{
    console.log(response.body.current)
})