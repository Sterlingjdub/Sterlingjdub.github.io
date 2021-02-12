var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfTheWeek = days[d.getDay()];
var day = d.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[d.getMonth()];
var year = d.getFullYear();

document.getElementById("currentDate").innerHTML = dayOfTheWeek + ", " + day + " " + month + " " + year;

// This will display the weekly banner only on Fridays
if (day == 5) {
    document.getElementById("banner").style.display = "block";
}
else {
    document.getElementById("banner").style.display = "none";
}
