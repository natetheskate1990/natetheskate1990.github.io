var d = new Date();

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var day = days[ d.getDay() ];
var month = months[ d.getMonth() ];

var year = d.getFullYear();
var dayN = d.getDate();


document.getElementById("currentdate").innerHTML = day + ", " + dayN + " " + month + " " + year;