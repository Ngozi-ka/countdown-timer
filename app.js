const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const countdownCon = document.querySelector(".countdown-container")

const time = "1 Jan 2026";

function countdown() {
    const reachingDay = new Date(time);
    const presentDay = new Date();

    const remaining = (reachingDay - presentDay) / 1000;

    const day = Math.floor(remaining / 3600 / 24);
    const hour = Math.floor(remaining / 3600) % 24;
    const minute = Math.floor(remaining / 60) % 60;
    const second = Math.floor(remaining % 60 ) ;


    days.innerHTML = day.toString().padStart(2, 0)
    hours.innerHTML = hour.toString().padStart(2, 0)
    minutes.innerHTML = minute.toString().padStart(2, 0)
    seconds.innerHTML = second.toString().padStart(2, 0)


    if(day == 0 && hour == 0 && minute == 0 && second == 0 ){
        countdownCon.innerHTML = "<h1> HAPPY NEW YEAR!!! </h1>"
    }

}

countdown();
setInterval(countdown, 1000)