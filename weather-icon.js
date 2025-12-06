export function getWeatherIcon(data) {
    let weatherCondition = null;
    if (Array.isArray(data)) {
        weatherCondition = data[0].toLowerCase();
    }

    else {
        weatherCondition = data.toLowerCase();
    }

    if (weatherCondition.includes('clear')) {
        return 'src/sun.svg';
    }

    if (weatherCondition.includes('rain')) {
        return 'src/cloud-rain.svg';
    }

    if (weatherCondition.includes('partially') || weatherCondition.includes('overcast')) {
        return 'src/cloud.svg';
    }
}