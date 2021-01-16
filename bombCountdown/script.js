let form = document.getElementById('form');

let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let show = function() {
    document.querySelector(".timerBackground").classList.toggle("none");
}

let setTime = function(hoursString, minutesString, secondsString) {
    let timeLeft = parseInt(hoursString, 10) * 3600 + parseInt(minutesString, 10) * 60 + parseInt(secondsString, 10);
    var promise = new Promise((resolve, reject) => {
        show();
        setTimeout(() => {
                resolve("result");
            },
            timeLeft * 1000);

    });
    promise.then(result => {
            hours.value = "0";
            minutes.value = "0";
            seconds.value = "0";
            show();
            alert("Time's over!");
        },
        error => {
            alert("Something went wrong");
        }
    );
}

form.onsubmit = function() {
    if (hours.value == "0" && minutes.value == "0" && seconds.value == "0") {
        alert("Please select time!");
    } else {
        setTime(hours.value, minutes.value, seconds.value)
    }
    return false;
}