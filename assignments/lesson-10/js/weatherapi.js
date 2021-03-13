const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=557ec8400baee06c0143ae1105085dd1&units=imperial';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=557ec8400baee06c0143ae1105085dd1&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  
        const desc = jsObject.weather[0].description;  
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



        document.getElementById('imagesrc').textContent = imagesrc;  
        document.getElementById('icon').setAttribute('src', imagesrc);  
        document.getElementById('icon').setAttribute('alt', desc);

  });

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      //console.log(jsObject);
      
      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  
      const desc = jsObject.weather[0].description;  

      // This will display the current weather information
      document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
      document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
      document.getElementById('low').textContent = Math.round(jsObject.main.temp_min);
      document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
      document.getElementById('wind').textContent = Math.round(jsObject.wind.speed);

      document.getElementById('imagesrc').textContent = imagesrc;  
      document.getElementById('icon').setAttribute('src', imagesrc);  
      document.getElementById('icon').setAttribute('alt', desc);

});
