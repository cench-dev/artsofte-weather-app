import { getWeatherIcon } from '../weather-icon.js';
import { getCelsius } from '../converter.js';

export function renderWeatherCard(currentWeather, result) {
    result.innerHTML = `
        <img class='weather-result__img' src='${getWeatherIcon(currentWeather.conditions)}'>
        <div class='weather-result__active-item'>
            ${getCelsius(currentWeather.temp)}°C<br>
        </div>

        <div class='weather-result__item'>
            Time: ${currentWeather.datetime}<br>
            feels like: ${getCelsius(currentWeather.feelslike)}°C<br>
            ${currentWeather.conditions}
        </div>`;
}

export function renderMusicCard(currentMusic, musicDiv) {
    musicDiv.innerHTML = `
        <div class='music-result'>
            <span class='music-result__text'>Ваша песня дня:<br></span>
            <span class='music-result__text'>${currentMusic.track}<br></span>
            <a href="${currentMusic.youtubeUrl}" target="_blank">Слушать на YouTube</a>
        </div>`;
}

export function renderWidget(weatherWidgets, latitudeValue, longitudeValue, currentWeather) {
    weatherWidgets.innerHTML += `
        <div class='widgetColumn__item'>
            <span class='widget_first_span'>Latitude: ${latitudeValue}<br></span>
            <span class='widget_second_span'>Longitude: ${longitudeValue}<br></span>
            <img class='widgetColumn__item--img' src='${getWeatherIcon(currentWeather.conditions)}'><br>
            <span class='widget_third_span'>${getCelsius(currentWeather.temp)}<span>
        </div>`;
}