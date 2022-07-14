var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY - hh:mm a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);