import {getLatLong} from "./getLatLongByCityName";
import convertCtoF from './convertCtoF';

const convertTempButton = document.querySelector('.convertTemp');
const getLocationInput = document.querySelector('#location-input');
let cityName = '';

convertTempButton.addEventListener('click', convertCtoF);

getLocationInput.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        cityName = getLocationInput.value;
        getLocationInput.value = '';
        getLatLong(cityName);
    }
});

export {cityName}