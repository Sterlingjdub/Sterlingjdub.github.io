let d = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfTheWeek = days[d.getDay()];
let day = d.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[d.getMonth()];
let year = d.getFullYear();

document.getElementById("currentDate").innerHTML = dayOfTheWeek + ", " + day + " " + month + " " + year;

