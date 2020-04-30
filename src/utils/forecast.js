const request = require('postman-request');

const forecast=(latitude, longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=9486e4264deeb3c64d2c63c2f81ac04f&query='+latitude+','+longitude+'&units=m'
    request({url, json:true},(error,{body})=>{
        if (error){
            callback('Unable to connect to weather service',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,{
                data:body.current.weather_descriptions[0]+'. It is '+body.current.temperature+' degrees out there, but it feels like '+body.current.feelslike+' degree celsius'
            })
        }
    })
}

module.exports=forecast