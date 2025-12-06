const queryMap = new Map();
queryMap.set('clear', 'sunny weather music');
queryMap.set('rain', 'rain weather music');
queryMap.set('overcast', 'overcast weather music')

export function getTypeWeather(data) {
    let weatherCondition = null;
    if (Array.isArray(data)) {
        weatherCondition = data[0].toLowerCase();
    }

    else {
        weatherCondition = data.toLowerCase();
    }

    if (weatherCondition.includes('clear')) {
        return queryMap.get('clear');
    }

    if (weatherCondition.includes('rain')) {
        return queryMap.get('rain');
    }

    if (weatherCondition.includes('overcast') || weatherCondition.includes('partially')) {
        return queryMap.get('overcast')
    }
}