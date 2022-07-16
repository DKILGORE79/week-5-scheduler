// running clock and date  - moment.js.com - https://stackoverflow.com/questions/66648322/live-clock-moment-js
var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY - hh:mm a');
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);
// --------------------------------------------------------------------------------------------------------

// saving to localStorage event - office hours help 
$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function (event) {

        event.preventDefault();
        // Get nearby values of the description - SIBLING?
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
    // ---------------------------------------------------------------------------------------------------------
    function timeTracker() {
        //get current number of hours. https://stackoverflow.com/questions/62462599/how-can-i-change-elements-style-based-on-the-time-of-day
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    // --------------------------------------------------------------------------------------------------------------
    // Get item from local storage - https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})