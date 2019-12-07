//display current time and date
var today = moment().format('dddd MMMM Do YYYY', true);
$('#day').html("Today is: " + today);

var time = moment().format('h:mm A');
var hour = moment().format("HH");
$('#time').html("The current time is: " + time);

//call in from index


