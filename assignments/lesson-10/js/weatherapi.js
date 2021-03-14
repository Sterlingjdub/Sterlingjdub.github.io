const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=557ec8400baee06c0143ae1105085dd1&units=imperial';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=557ec8400baee06c0143ae1105085dd1&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        const temp = Math.round(jsObject.main.temp);
        const speed = Math.round(jsObject.wind.speed);


        // Windchill
        let windChill = "N/A"
        if (temp <= 50 && speed >= 3){
            let f = 35.74 + .6215 * temp - 35.75 * Math.pow(speed, .16) +
            .4275 * temp * Math.pow(speed, .16);
            windChill = Math.round(f) + "°F";
        }

        // This will display the current weather information
        document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
        document.getElementById('low').textContent = Math.round(jsObject.main.temp_min);
        document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
        document.getElementById('wind').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('windChill').innerHTML = windChill;

  });

// This is for the 5-day forcast
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let count = 0;
        const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        
        // This will loop through 5 times
        for (let i = 0; count < 5; i++) {
          let forecast = jsObject.list[i];

          if (forecast.dt_txt.includes("18:00:00")) {
            count++;
        
            let date = new Date(forecast.dt_txt);
            let day = date.getDay();
        

            const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
            const desc = forecast.weather[0].description;
        
            document.getElementById(`day` + count).textContent = dayOfWeek[day];
            document.getElementById(`tempH` + count).textContent = forecast.main.temp_max;
            document.getElementById(`tempL` + count).textContent = forecast.main.temp_min;
            document.getElementById(`icon` + count).setAttribute('src', imagesrc);
            document.getElementById(`icon` + count).setAttribute('alt', desc);
          }
        }

});
