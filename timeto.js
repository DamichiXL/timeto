const deadline = 'February 09 2026 13:30:00 GMT+0300';

const addZero = (number) =>  number < 10 ? '0' + number : number;

const getTimeRemaining = (endtime) => {
    const total = Date.parse(endtime) - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

const print = ({days, hours, minutes, seconds}) =>  {
    document.getElementById('days').innerText = addZero(days);
    document.getElementById('hours').innerText = addZero(hours);
    document.getElementById('minutes').innerText = addZero(minutes);
    document.getElementById('seconds').innerText = addZero(seconds);
}


let intervalID;

const updateClock = () => {
    const timeRemaining = getTimeRemaining(deadline)

    if (timeRemaining.total <= 0) {
        print({days: 0, hours: 0, minutes: 0, seconds: 0});
        clearInterval(intervalID);
    } else {
        print(timeRemaining);
    }
}

document.addEventListener('DOMContentLoaded',  () => {
    intervalID = setInterval(updateClock, 1000);
})

window.addEventListener('beforeunload', () => clearInterval(intervalID))
