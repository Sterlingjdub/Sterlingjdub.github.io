

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/4c9a62e07d2a34c1/conditions/forecast/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('current').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('c-temp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('wind').innerHTML = weatherInfo.current_observation.wind_gust_mph;
    document.getElementById('feelsLike').innerHTML = weatherInfo.current_observation.windchill_f;
    document.getElementById('img-current').src = weatherInfo.current_observation.icon_url;
    document.getElementById('c-forecast').innerHTML = weatherInfo.forcast.txt_forcast.forecastday["0"].fcttext;
}