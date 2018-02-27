var x = document.getElementById("high").innerHTML;
var low = document.getElementById("low").innerHTML;
x = parseInt(x);
low = parseInt(low);
var t = (x+low)/2;

var s = document.getElementById("speed").innerHTML;
var s = parseInt(s);

s = Math.pow(s,0.16)
    f = 35.74 + 0.6215 * t - 35.75 * s + 0.4275 * t * s 

var wc = document.getElementById("windChill").innerHTML = f;
