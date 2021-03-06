const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

 
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                let card = document.createElement('townbox');
                let photo = document.createElement('img');
                let name = document.createElement('h1');
                let motto = document.createElement('h2');
                let yearFounded = document.createElement('h3');
                let currentPopulation = document.createElement('h4');
                let averageRainfall = document.createElement('h5');
                

       
                photo.setAttribute('src', 'images/' + towns[i].photo);
                photo.setAttribute('alt', towns[i].name);
                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yearFounded.textContent = 'Year founded: ' + towns[i].yearFounded;
                currentPopulation.textContent = "Population: " + towns[i].currentPopulation;
                averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
               
              
               
                card.appendChild(photo);
                card.appendChild(name);
                card.appendChild(motto);
                card.appendChild(yearFounded);
                card.appendChild(currentPopulation);
                card.appendChild(averageRainfall);
                document.querySelector('div.cards').appendChild(card);
            }
        }
    });