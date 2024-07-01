

var currentdate = new Date();
// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = currentdate.getDay();

// Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = "Date: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " Today is: " + daylist[day] + ".";
var time = "Time: "
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

document.getElementById("date").innerHTML =date;
document.getElementById("time").innerHTML =time;