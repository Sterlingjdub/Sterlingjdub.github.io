
fetch("directory.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['business'];
        for (let i = 0; i < businesses.length; i++ ) {
            //Creating elements
            let card = document.createElement('section');
            let h5 = document.createElement('h5');
            let p = document.createElement('p');
            let a = document.createElement('a');
            let number = document.createElement('p');
            let email = document.createElement('p');
            let image = document.createElement('img');

            h5.textContent = businesses[i].name;
            number.textContent = businesses[i].phone;
            email.textContent = businesses[i].email;
            a.textContent = businesses[i].name + " Website";
            a.setAttribute("href", businesses[i].link);
            image.setAttribute('src', businesses[i].image);
            image.setAttribute('alt', businesses[i].name + " logo");

            //Appending the elements
            card.appendChild(h5);
            card.appendChild(p);
            p.appendChild(number);
            p.appendChild(email);
            p.appendChild(a);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });


//Display the list view
function listView() {
    document.getElementById("cards").classList.add("list-view");
    document.getElementById("cards").classList.remove("grid-view");
}

//Display the grid view
function gridView() {
    document.getElementById("cards").classList.add("grid-view");
    document.getElementById("cards").classList.remove("list-view");
  }
  

