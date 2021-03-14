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

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let count = 0;
        const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        
        for (let i = 0; count < 5; i++) {
          let obj = jsObject.list[i];
          if (obj.dt_txt.includes("18:00:00")) {
            count++;
        
            //Calculate day of week
            let date = new Date(obj.dt_txt);
            let day = date.getDay();
        

            let imagesrc = `https://openweathermap.org/img/w/${obj.weather[0].icon}.png`;
            let desc = obj.weather[0].description;
        
            document.getElementById(`day${count}`).textContent = dayOfWeek[day];
            document.getElementById(`tempH${count}`).textContent = Math.round(obj.main.temp);
            document.getElementById(`tempL${count}`).textContent = Math.round(obj.main.temp_min);
            document.getElementById(`img${count}`).setAttribute('src', imagesrc);
            document.getElementById(`img${count}`).setAttribute('alt', desc);
          }
        }

});
