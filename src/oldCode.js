// let openWeatherAPICall = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${openWeatherAPIKey}`;

// function getLatLong(cityName){
//     async function getData(){
//         let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=3f06e2b0078f1ce055f5891af19c4e57`);
//         let data = await response.json();
//         let latLong = {lat: data[0].lat, long: data[0].lon};
//         latitude = latLong.lat;
//         longitude = latLong.long;
//         console.log(latLong);
//     }
//     getData();
// }

// function getLocation(){
//     navigator.geolocation.getCurrentPosition(function(position){
//         let lat = (position.coords.latitude).toFixed(4);
//         let long = (position.coords.longitude).toFixed(4);
//         let corsAnywhere = `https://cors-anywhere.herokuapp.com/`;
//         let apiKey = `https://api.darksky.net/forecast/${darkSkyAPIKey}/${latitude},${longitude}`;
   
//         // console.log(`Latitude: ${lat}, Longitude: ${long}`);

//         async function getWeather (){
//            let response = await fetch(corsAnywhere+apiKey);
//            let data = await response.json();
//            console.log(data);
//            weatherDescriptionText = data.daily.data[0].summary;
//            dailyTemperature = data.daily.data[0].apparentTemperatureHigh;
//            weatherIcon = data.daily.data[0].icon.toUpperCase();
//            const regex = /-/g;
//            weatherIcon = weatherIcon.replace(regex, '_');
//            console.log(weatherIcon);

//            weatherLocationDiv.innerText = data.timezone;
//            tempDegrees.innerText = dailyTemperature;
//            weatherDescriptionDiv.innerText = weatherDescriptionText;
//         }

//         getWeather();
//     });

// }

// getLocationInput.addEventListener('keydown', (e)=>{
//     if(e.key === 'Enter'){
//         cityName = getLocationInput.value;
//         getLatLong();
//         getLocationInput.value = '';
//         getLocation();
//        setTimeout(() => {
//            getLocation();
//        }, 500);
//     }
// });


// function getLatLong(cityName){
//     async function getData(){
//         let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=3f06e2b0078f1ce055f5891af19c4e57`);
//         let data = await response.json();
//         let latLong = {lat: data[0].lat, long: data[0].lon};
//         // latitude = latLong.lat;
//         // longitude = latLong.long;
//         console.log(latLong);
//     }
//     getData();
// }