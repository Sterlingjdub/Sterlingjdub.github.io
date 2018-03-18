var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var townInfo = request.response;
    storeTownData(townInfo);
}

function storeTownData(jsonObj) {
    var city = jsonObj['towns'];

    for (var i = 0; i < city.length; i++)
    {
        if (city[i].name == 'Franklin')/*|| towns[i].name == 'Greenville' || towns[i].name == 'Springfield')*/
        {
            document.getElementById("fMotto").innerHTML = 'Motto: ' + city[i].motto;
            document.getElementById("fFounded").innerHTML = 'Year Founded: ' + city[i].yearFounded;
            document.getElementById("fPopulation").innerHTML = 'Current Population: ' + city[i].currentPopulation;
            document.getElementById("fRainfall").innerHTML = 'Average Rainfall: ' + city[i].averageRainfall;

        }
        else if (city[i].name == 'Greenville')
        {
            document.getElementById("gMotto").innerHTML = 'Motto: ' + city[i].motto;
            document.getElementById("gFounded").innerHTML = 'Year Founded: ' + city[i].yearFounded;
            document.getElementById("gPopulation").innerHTML = 'Current Population: ' + city[i].currentPopulation;
            document.getElementById("gRainfall").innerHTML = 'Average Rainfall: ' + city[i].averageRainfall;

        }
        else if (city[i].name == 'Springfield')
        {
            document.getElementById("sMotto").innerHTML = 'Motto: ' + city[i].motto;
            document.getElementById("sFounded").innerHTML = 'Year Founded: ' + city[i].yearFounded;
            document.getElementById("sPopulation").innerHTML = 'Current Population: ' + city[i].currentPopulation;
            document.getElementById("sRainfall").innerHTML = 'Average Rainfall: ' + city[i].averageRainfall;

        }
    }
}