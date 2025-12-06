import { weatherQuery, parseWeatherData } from './api/weather-api.js';
import { searchYoutubeMusic, parseYoutubeData } from './api/youtube-api.js';
import { renderWeatherCard, renderMusicCard, renderWidget } from './render/renderWeather.js';
import { checkIsParamNum, checkIsValidLatitude, checkIsValidLongitude } from './validate.js';
import { getTypeWeather } from './weather-type.js';

const latitude = document.getElementById('latitudeId');
const longitude = document.getElementById('longitudeId');
const showWeatherButton = document.getElementById('buttonId');
const addWeatherWidget = document.getElementById('widgetId');
const weatherWidgets = document.getElementById('widgetColumn');
const result = document.createElement('div');
result.className = 'weather-result';
const musicDiv = document.createElement('div');

let currentWeather = null;
let currentMusic = null;

document.body.appendChild(result);
document.body.appendChild(musicDiv);

async function updateLocation() {
    if (!validateCoordinates(latitude.value, longitude.value)) {
        showError('Пожалуйста, введите координаты в виде чисел');
    }
    
    const weatherRaw = await weatherQuery(latitude.value, longitude.value);
    currentWeather = parseWeatherData(weatherRaw);
    renderWeatherCard(currentWeather, result);
    const weatherType = getTypeWeather(currentWeather.conditions);
    const musicRaw = await searchYoutubeMusic(weatherType);
    currentMusic = parseYoutubeData(musicRaw);
    renderMusicCard(currentMusic, musicDiv);
}

function validateCoordinates(lat, lng) {
    return checkIsParamNum(lat) && checkIsParamNum(lng) && checkIsValidLatitude(lat) && checkIsValidLongitude(lng);
}

function showError(errorMessage) {
    result.innerHTML = `<div class="error">${errorMessage}</div>`;
}

showWeatherButton.addEventListener('click', updateLocation);

addWeatherWidget.addEventListener('click', () => {
    if (!currentWeather) {
        showError('Пожалуйста, сначала введите погоду');
    }
    renderWidget(weatherWidgets, latitude.value, longitude.value, currentWeather);
});
