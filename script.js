//display current time and date
var today = moment().format('dddd MMMM Do YYYY', true);
$('#day').html("Today is: " + today);

var time = moment().format('h:mm A');
var hour = moment().format("HH");
$('#time').html("The current time is: " + time);


//arrays
var timearray0 = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var timearray1 = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
var eventarray = ["", "", "", "", "", "", "", "", ""]
var calendar0 = $("#calbody");
var inputevents = {};


//local storage
if (localStorage.getItem("eventarray")) 
    {
    eventsArray = JSON.parse(localStorage.getItem("eventarray"))
    }

//make calendar content
function makecalendar() {
    for (var i = 0; i< 9; i++) {
       var makerows = $("<div>").addClass("addedrow").attr("id", timearray0[i]);
        var timedivs = $(timearray0[i]);
        makerows.append(timedivs);

        var eventdivs = $("<textarea>").addClass("event").attr("id", timearray0[i] + "event");
        eventdivs.text(eventarray[i]);
        makerows.append(eventdivs);

        var savebutton = $("<button>").addClass("save").attr("id", timearray0[i] + "save");
        savebutton.text("save");
        makerows.append(savebutton)
        calendar0.append(makerows)
    }
}

function saveinput(timeEl, keyname)
{
 var userinput = timeEl.val();
 var placeholder = timeEL.placeholder;

 if (textbox === "")
    {
    textbox = placeholder;
    }
    calendarevent[keyname] = userinput;
 
};

makecalendar();



function clearLocalStorage() {
    inputevents = {};
    storeEvents();
    location.reload();
  };
  