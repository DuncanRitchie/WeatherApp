const request = require("request");
weatherUrl = "https://api.darksky.net/forecast/be7deb5ceb49b65e140c2bddebbe9f06/53.1921,-2.8803?units=si";
geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Chester.json?access_token=pk.eyJ1IjoiZHVuY2FuciIsImEiOiJjanQ3ZGZ2OXgwb3NxM3pydXUzbmN1MThjIn0.Hw9zenxA4-uRV32LPm7Iqw"

request({url: weatherUrl, json: true},(error, response)=>{
    if (error) {
        console.log("Error getting weather data!")
    }
    else {
        let data = response.body;
        console.log(data.currently)
    }
})

request({url: geoUrl, json: true},(error, response)=>{
    if (error) {
        console.log("Error getting geo-data!")
    }
    else {
        let data = response.body;
        console.log(`The longitude of Chester is ${data.features[0].geometry.coordinates[0]} degrees and the latitude is ${data.features[0].geometry.coordinates[1]} degrees.`)
    }
})