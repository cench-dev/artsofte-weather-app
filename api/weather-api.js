export async function weatherQuery(latitudeValue, longitudeValue) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitudeValue},${longitudeValue}?key=${window.API_CONFIG.WEATHER_API_KEY}&include=current&elements=temp,datetime,feelslike,conditions`);
    return await response.json();
}

export function parseWeatherData(response) {
    return {
        temp: response.currentConditions.temp,
        datetime: response.currentConditions.datetime,
        feelslike: response.currentConditions.feelslike,
        conditions: response.currentConditions.conditions
    };
}