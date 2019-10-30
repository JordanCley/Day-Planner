var hour = "",
    todayDate = null,
    todayTime = null,
    eventsArray = [],
    timeArray = [];

// GETTING CURRENT DATE AND TIME AND DISPLAYING IT IN JUMBOTRON
function todaysDateTime() {
  todayDate = moment().format("MMMM Do, YYYY");
  todayTime = moment().format("h:mm:ss a");
  hour = 12; //moment().format("HH");
  for (var i = 9; i <= 17; i++) {
    var textTimeId = $("." + i);
    if (hour > i) {
      textTimeId.addClass("past");
      textTimeId.prop("disabled", true);
    } else if (hour === i) {
      textTimeId.addClass("now");
    } else {
      textTimeId.addClass("future");
    }
  }
  $("#todaysDate").text(todayDate);
  $("#todaysTime").text(todayTime);
}

// EVENT LISTENER FOR SAVE BUTTON AND STORING EVENT 
// FROM TEXT BOX IN IN LOCALSTORAGE
function storeEvent() {
  $(".save").on("click", function() {
    timeEvent = [];
    var saveBtn = $(this).attr("data-time");
    var stringID = "#" + saveBtn;
    var input = $(stringID)
      .val()
      .trim();
    localStorage.setItem(saveBtn, input);
  });
}

// LOOPING THROUGH LOCAL STORAGE AND DISPLAYING IN TEXTAREAS 
function displayEvents() {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var textArea = $("#" + key);
    textArea.text(localStorage.getItem(key));
  }
}

$(document).ready(function() {
  todaysDateTime();
  storeEvent();
  displayEvents();
  setInterval(todaysDateTime, 1000);
});
