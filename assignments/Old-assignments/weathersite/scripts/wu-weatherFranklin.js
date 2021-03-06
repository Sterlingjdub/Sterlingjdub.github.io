/*----Conditions----*/

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/4c9a62e07d2a34c1/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('current').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('c-temp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('wind').innerHTML = weatherInfo.current_observation.wind_gust_mph;
    document.getElementById('feelsLike').innerHTML = weatherInfo.current_observation.windchill_f;
    document.getElementById('weatherIcon').src = weatherInfo.current_observation.icon_url;
}

/*----Forecast----*/

var forecastObject = new XMLHttpRequest();

forecastObject.open('POST', 'http://api.wunderground.com/api/4c9a62e07d2a34c1/forecast/q/MN/Franklin.json', true);

forecastObject.send();

forecastObject.onload = function(){

    var forecastInfo = JSON.parse(forecastObject.responseText);

    console.log(forecastInfo);

    document.getElementById("high").innerHTML = forecastInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById("low").innerHTML = forecastInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById("c-forecast").innerHTML = forecastInfo.forecast.txt_forecast.forecastday["0"].fcttext;

} 