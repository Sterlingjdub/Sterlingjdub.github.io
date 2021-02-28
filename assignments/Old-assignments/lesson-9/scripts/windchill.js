var h = parseFloat(document.getElementById('high').textContent);
var l = parseFloat(document.getElementById('low').textContent);
var s = parseFloat(document.getElementById('wind').textContent);
var t = (h + l) / 2;

function windChill(tempF, speed) {
var f = 35.74 + .6215 * tempF - 35.75 * Math.pow(speed, .16) +
.4275 * tempF * Math.pow(speed, .16);
return Math.round(f);
}

var ans = windChill(t, s);
document.getElementById('feelsLike').innerHTML = ans;