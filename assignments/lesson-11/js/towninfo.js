const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

 
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');

                let motto = document.createElement('h3');
                let year = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let image = document.createElement('img');
                

                h2.textContent = towns[i].name;
                h2.setAttribute('class', 'town-name');
                motto.textContent = towns[i].motto;
                motto.setAttribute('class', 'town-motto');
                year.textContent = 'Year Founded: ' + towns[i].yearFounded;
                population.textContent = 'Population: ' + towns[i].currentPopulation;
                rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                image.setAttribute('src', "images/" + towns[i].photo);
                image.setAttribute('alt', towns[i].name);
        
                card.appendChild(h2);
                card.appendChild(motto);
                card.appendChild(year);
                card.appendChild(population);
                card.appendChild(rainfall);
                card.appendChild(image);


                document.querySelector('div.home-grid').appendChild(card);
            }
        }
    });
