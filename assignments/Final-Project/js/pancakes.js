// This will display the weekly banner only on Fridays
let day = new Date();
window.onload = function pancake() {
    if (day.getDay() == 5) {
        document.getElementById("banner").style.display = "block";
    }
    else {
        document.getElementById("banner").style.display = "none";
    }
}
