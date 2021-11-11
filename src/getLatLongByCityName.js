import openWeatherAPIKey from './openWeatherAPIKey';
import {cityName} from './script';
import getWeather from './getWeather';

let latitude;
let longitude;

let latLong = {};
function getLatLong(){
    const openWeatherAPICall = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${openWeatherAPIKey}`;
    async function getData(){
        const response = await fetch(openWeatherAPICall);
        const data = await response.json();
        latLong.lat = data[0].lat;
        latitude = latLong.lat;
        latLong.lon = data[0].lon;
        longitude = latLong.lon;
       getWeather(latitude, longitude)
    }
    getData()
}

export {getLatLong, latitude, longitude}