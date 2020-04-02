$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
    for (i = 9; i < 17; i++) {
        var temporaryStorage = localStorage.getItem("scheduleStr" + i);
        $("textarea[data-hour = " + i + "]").val(temporaryStorage)
        // 
    };
    // refress page every hour to update time blocks
    // setInterval(refreshPage(), 600000);
    getTimeBlockClasses();
    $(".saveBtn").on("click", function () {
        console.log("I have been clicked")
        var dataHour = ($(this).attr("data-hour"));
        console.log(dataHour)
        var textDescription = $("textarea[data-hour = " + dataHour + "]").val()
        console.log(textDescription);
        localStorage.setItem("scheduleStr" + dataHour, textDescription)
    });


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

    // function refreshPage() { 
    //     location.reload(); 
    // }
});


