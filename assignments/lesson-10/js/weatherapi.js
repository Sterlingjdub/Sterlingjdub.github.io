const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=557ec8400baee06c0143ae1105085dd1&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  
        const desc = jsObject.weather[0].description;  

        document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
        document.getElementById('low').textContent = Math.round(jsObject.main.temp_min);
        document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
        document.getElementById('wind').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('imagesrc').textContent = imagesrc;  
        document.getElementById('icon').setAttribute('src', imagesrc);  
        document.getElementById('icon').setAttribute('alt', desc);

  });


