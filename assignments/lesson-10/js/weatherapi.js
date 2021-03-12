const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=557ec8400baee06c0143ae1105085dd1';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

  });

