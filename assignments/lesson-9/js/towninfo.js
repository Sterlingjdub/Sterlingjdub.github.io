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

                let p = document.createElement('p');
                let motto = document.createElement('h3');
                let year = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let image = document.createElement('img');
                

                h2.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                year.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation
                rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall
                image.setAttribute('src', towns[i].photo);
                image.setAttribute('alt', towns[i].name);
        
                card.appendChild(h2);
                card.appendChild(p);
                p.appendChild(motto)
                p.appendChild(year);
                p.appendChild(population);
                p.appendChild(rainfall);
                card.appendChild(image);




                document.querySelector('div.home-grid').appendChild(card);
            }
        }
    });
