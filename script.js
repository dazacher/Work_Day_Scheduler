$(document).ready(function () {
    // Put the current day and time at the top of the page
    $("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
    // Loop through local storage and put data on page in correct hour
    for (i = 9; i <= 17; i++) {
        var temporaryStorage = localStorage.getItem("scheduleStr" + i);
        $("textarea[data-hour = " + i + "]").val(temporaryStorage)
        // 
    };

    setInterval("refreshPage()", 600000);

    // Call the function to update the hours to the correct colors
    getTimeBlockClasses();
    // On save button click add data added to hour and save to local storage
    $(".saveBtn").on("click", function () {
        console.log("I have been clicked")
        var dataHour = ($(this).attr("data-hour"));
        console.log(dataHour)
        var textDescription = $("textarea[data-hour = " + dataHour + "]").val()
        console.log(textDescription);
        localStorage.setItem("scheduleStr" + dataHour, textDescription)
    });

// This function updates the hours to the correct colors for past, present, and future
    function getTimeBlockClasses() {

        for (i = 9; i <= 17; i++) {
            var currentHour = moment().hour();

            console.log($(".description[data-hour=" + i + "]").val());
            console.log("Moment().hour " + moment().hour());
            console.log("CurrentHour " + currentHour);
            console.log("i " + i);

            if (currentHour > i) {

                $(".description[data-hour=" + i + "]").addClass("past");

            } else if (currentHour === i) {

                $(".description[data-hour=" + i + "]").addClass("present");

            } else {

                $(".description[data-hour=" + i + "]").addClass("future");
            };
        };
    };
});

function refreshPage() { 
    location.reload(); 
};


