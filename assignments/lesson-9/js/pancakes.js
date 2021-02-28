// This will display the weekly banner only on Fridays
let day = new Date().getDay();
if (day == 5) {
    document.getElementById("banner").style.display = "block";
}
else {
    document.getElementById("banner").style.display = "none";
}