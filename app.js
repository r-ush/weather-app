const request = require('postman-request');
const geocode=require('./utils/geocode')

// const url='http://api.weatherstack.com/current?access_key=9486e4264deeb3c64d2c63c2f81ac04f&query=London,%20United%20Kingdom&units=m'
// const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoici11c2giLCJhIjoiY2s5azB5YnN4MGFyeDNxcGh4MzM3bmMyNSJ9.LFqFIPbYK9ZpM5kzpuDTkw&limit=1'

// request({url:url, json:true},(error, response)=>{
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.error){
//         console.log('unable to find location')
//     }else{
//         console.log(response.body.current.weather_descriptions[0]+'. It is '+response.body.current.temperature+' degrees out there, but it feels like '+response.body.current.feelslike+' degree celsius')
//     }
// })

// request({url:geocodeURL, json:true},(error, response)=>{
//     if (error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.features.length===0){
//         console.log('unable to find location')
//     }else{
//         console.log(response.body.features[0].center)
//     }
// })



geocode('Philadelphia',(error,data)=>{
    console.log('error', error)
    console.log('Data',data)
})