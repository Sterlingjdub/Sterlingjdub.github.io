// This will display the weekly banner only on Fridays
let d = new Date();
let day = d.getDay();
if (day == 5) {
    document.getElementById("banner").style.display = "block";
}
else {
    document.getElementById("banner").style.display = "none";
}