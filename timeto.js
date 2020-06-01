function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
function print(data) {
    if (data.days < 10){
        jQuery('.timer .days span').text("0"+data.days);
    }else{
        jQuery('.timer .days span').text(data.days);
    }
    if (data.hours < 10){
        jQuery('.timer .hours span').text("0"+data.hours);
    }else{
        jQuery('.timer .hours span').text(data.hours);
    }
    if (data.minutes < 10){
        jQuery('.timer .minutes span').text("0"+data.minutes);
    }else{
        jQuery('.timer .minutes span').text(data.minutes);
    }
    if (data.seconds < 10){
        jQuery('.timer .seconds span').text("0"+data.seconds);
    }else{
        jQuery('.timer .seconds span').text(data.seconds);
    }
}
function init() {
    function updateClock() {
        let deadline = "June 05 2020 16:00:00 GMT+0300";
        print(getTimeRemaining(deadline));
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}