const request = require('request')

const forecast = (latitude, longitude, callback) => {
    let url = '' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + 'It')
        }
    })
}

module.exports = forecast