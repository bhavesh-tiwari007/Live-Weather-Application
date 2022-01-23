const request = require("request");
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
    // const url = "http://api.weatherstack.com/current?access_key=137dfd3a4df218d182e3d8a8a8178110&query=New%20York"

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to Weather Services!")
//     } else {
//         console.log('it is currently ' + response.body.current.temperature + ' and it feels like ' + response.body.current.feelslike)
//     }
// })

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to Weather Services!")
//     } else {
//         console.log(response.body.location.localtime)
//     }
// })

// const url2 =a
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/New%20Delhi.json?access_token=pk.eyJ1IjoiYmhhdmVzaC10aXdhcmkiLCJhIjoiY2t5bDhrYXN3MXZ2YjJ3cDAwZ3g1a2c1ZCJ9.S3unHYIFPPqx_bvYoOj0Uw&limit=1";

// request({ url: url2, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to Weather Services!");
//     } else if (response.body.features.length == 0) {
//         console.log("Unable to fetch the weather for ths location");
//     } else {
//         const lat = response.body.features[0].center[1];
//         const longi = response.body.features[0].center[0];
//         console.log(lat, " ", longi);
//     }
// });

const location = 'delhi'

geocode(location, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)

})
setTimeout(() => {
    forecast(location, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)

    })
}, 2000)