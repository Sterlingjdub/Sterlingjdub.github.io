var h = parseFloat(document.getElementById('high').textContent);
var l = parseFloat(document.getElementById('low').textContent);
var s = parseFloat(document.getElementById('wind').textContent);
var t = (h + l) / 2;

function windChill(tempF, speed) {
    if (tempF <= 50 && speed >= 3){
        var f = 35.74 + .6215 * tempF - 35.75 * Math.pow(speed, .16) +
        .4275 * tempF * Math.pow(speed, .16);
        return Math.round(f) + "°F";
    }
    else {
        return "N/A"
    }
}


var ans = windChill(t, s);
document.getElementById('windChill').innerHTML = ans;
