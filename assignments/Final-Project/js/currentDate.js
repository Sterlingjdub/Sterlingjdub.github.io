let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let today = new Date();
let dayOfTheWeek = today.getDay();


document.getElementById("currentDate").innerHTML = days[dayOfTheWeek] + ", " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();