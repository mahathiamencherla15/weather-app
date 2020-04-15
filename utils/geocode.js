const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibWFoYXRoaWFtZW5jaGVybGExNSIsImEiOiJjazkxZGljYzEwMnprM2ZxZTJya3FiaTQxIn0.oBP7shNESmXM5N9Ng-nIKQ&limit=1"
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Cant find location! Try another search.', undefined)
        } else {
            callback(undefined, {
                Latitude: response.body.features[0].center[1],
                Longitude: response.body.features[0].center[0],
                Location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode