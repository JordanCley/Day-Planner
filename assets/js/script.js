
// select user input and save it in local storage when icon is clicked
// if hour has passed disable input, else if time is current change to green else
// turn orange


var todayDate = null;
var todayTime = null;
var eventsArray = [];
var objectArray = [];
var timeEvent = [];


function todaysDateTime() {
    todayDate = moment().format("MMMM Do, YYYY");
    todayTime = moment().format("h:mm:ss a")
  $("#todaysDate").text(todayDate);
  $("#todaysTime").text(todayTime);
}

function storeEvent() {
    $(".save").on("click", function(){
        var saveBtn = $(this).attr("data-time");
        var stringID = "#" + saveBtn;
        var input = $(stringID).val().trim();
        timeEvent = [{ time: saveBtn, event: input }];
        console.log(timeEvent);
        eventsArray.push(timeEvent);
        console.log("no if " + eventsArray);
    });
}


$(document).ready(function(){
    todaysDateTime();
    storeEvent();
    setInterval(todaysDateTime, 1000);
});


