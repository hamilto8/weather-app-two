import darkSkyAPIKey from './darkSkyAPIKey';

let corsAnywhere = `https://cors-anywhere.herokuapp.com/`;

const weatherLocationDiv = document.querySelector('.weather-location');
const weatherDescriptionDiv = document.querySelector('.weather-description');
const tempDegrees = document.querySelector('.tempDegrees');

const icon = new Skycons( {color: '#222'});
icon.set('icon', 'clear-day');
icon.play();

function getWeather(lat, lon){
    let apiKey = `https://api.darksky.net/forecast/${darkSkyAPIKey}/${lat},${lon}`;
    async function getDarkWeatherData(){
        const response = await fetch(corsAnywhere+apiKey);
        const darkWeatherData = await response.json();
        weatherLocationDiv.innerText = darkWeatherData.timezone;
        weatherDescriptionDiv.innerText = darkWeatherData.currently.summary;
        tempDegrees.innerText = darkWeatherData.currently.apparentTemperature;
        icon.set('icon', darkWeatherData.currently.icon);
        icon.play();
    }
    getDarkWeatherData();
}

export default getWeather