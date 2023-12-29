/////////////////////////////
///  Import Dependencies ////
/////////////////////////////
const express = require('express');
const axios = require('axios')
require('dotenv').config()
const weatherURL = process.env.API_WEATHER_APP

///////////////////////
///  Create Router ////
///////////////////////
const router = express.Router();

////////////////////////
// Create Variables ////
////////////////////////
let lat = 42.3761504
let long = -85.45500539999999

// TEST COORDS     42.3761504,-85.45500539999999

//////////////////////////////
///  Routes + Controllers ////
//////////////////////////////

/* GET home page. */
router.get('/', function(req, res, next) {
    axios(`${weatherURL}${lat},${long}&days=3&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
        // render the results on a 'show' page: aka 'detail' page
        .then(apiRes => {
            let weather = apiRes.data
            let locName = weather.location.name
            let forecast1 = weather.forecast.forecastday[0] // DAY OF
            let forecast2 = weather.forecast.forecastday[1] // TOMORROW
            let locRegion = weather.location.region
            let locTime = weather.location.localtime
            let hours = forecast1.hour
            // THis will be the time we start from
            let localTime = locTime[11] + locTime[12]
            let hourTime = hours.splice(localTime)
            let idx = 0;

            while (hourTime.length < 12) {
                hourTime.push(forecast2.hour[idx])
                idx++
            }
console.log('this is the idx: \n', idx)

            let hour = hourTime[0]
            let hour1 = hourTime[1]
            let hour2 = hourTime[2]
            let hour3 = hourTime[3]
            let hour4 = hourTime[4]
            let hour5 = hourTime[5]
            let hour6 = hourTime[6]
            let hour7 = hourTime[7]
            let hour8 = hourTime[8]
            let hour9 = hourTime[9]
            let hour10 = hourTime[10]
            let hour11 = hourTime[11]
            //TESTING
            console.log(hour7.time)
            console.log(hour8.time)
            console.log(hour9.time)
            // console.log('7 8 9 not working: \n', hourTime)
            //TESTING
            res.render('index', { title: 'Express', weather, hour, hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9, hour10, hour11})
        })
        .catch(err => {
            console.log('error', err)
            res.redirect(`/error?error=${err}`)
    })
})

// This will be for the hourly forcasts
router.get('/weather/daily', (req, res) => {
    axios(`${weatherURL}${lat},${long}&days=3&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
        // render the results on a 'show' page: aka 'detail' page
        .then(apiRes => {
            let weather = apiRes.data
            let locName = weather.location.name
            let forecast1 = weather.forecast.forecastday[0] // DAY OF
            let forecast2 = weather.forecast.forecastday[1] // TOMORROW
            let locRegion = weather.location.region
            let locTime = weather.location.localtime
            let hours = forecast1.hour
            // THis will be the time we start from
            let localTime = locTime[11] + locTime[12]
            let hourTime = hours.splice(localTime)
            let idx = 0;

            while (hourTime.length < 12) {
                hourTime.push(forecast2.hour[idx])
                idx++
            }
console.log('this is the idx: \n', idx)

            let hour = hourTime[0]
            let hour1 = hourTime[1]
            let hour2 = hourTime[2]
            let hour3 = hourTime[3]
            let hour4 = hourTime[4]
            let hour5 = hourTime[5]
            let hour6 = hourTime[6]
            let hour7 = hourTime[7]
            let hour8 = hourTime[8]
            let hour9 = hourTime[9]
            let hour10 = hourTime[10]
            let hour11 = hourTime[11]
            //TESTING
            console.log(hour7.time)
            console.log(hour8.time)
            console.log(hour9.time)
            // console.log('7 8 9 not working: \n', hourTime)
            //TESTING
            res.render('weather/daily', { weather, hour, hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9, hour10, hour11})
        })
        .catch(err => {
            console.log('error', err)
            res.redirect(`/error?error=${err}`)
    })
})

///////////////////////
///  Export Router ////
///////////////////////
module.exports = router;