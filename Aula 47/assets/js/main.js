let blockTimer = document.querySelector('#timer')
let hour = 0
let minutes = 0
let seconds = 0
var inter;
function start() {
    blockTimer.style.color = 'black'
    inter = setInterval(function () {
        seconds++
        if (seconds === 60) {
            seconds = 0
            minutes++
            if (minutes === 60) {
                minutes = 0
                hour++
            } 
            if (hour === 24) {
                hour = 0
            }
        }
        condition(hour, minutes, seconds)
    }, 1000)
}
function condition(h, m, s) {
    if (s < 10 && m < 10 && h < 10) {
        return blockTimer.innerHTML = `0${h}:0${m}:0${s}`
    } else if (s >= 10 && m >= 10 && h >= 10) {
        return blockTimer.innerHTML = `${h}:${m}:${s}`
    } else if (s < 10 && m >= 10 && h >= 10) {
        return blockTimer.innerHTML = `${h}:${m}:0${s}`
    } else if (s >= 10 && m < 10 && h < 10) {
        return blockTimer.innerHTML = `0${h}:0${m}:${s}`
    } else if (s < 10 && m >= 10 && h < 10) {
        return blockTimer.innerHTML = `0${h}:${m}:0${s}`
    } else if (s >= 10 && m < 10 && h >= 10) {
        return  blockTimer.innerHTML = `${h}:0${m}:${s}`
    } else if (s >= 10 && m >= 10 && h < 10) {
        return blockTimer.innerHTML = `0${h}:${m}:${s}`
    } else {
        return blockTimer.innerHTML = `${h}:0${m}:0${s}`
    }
}
function stop() {
    clearInterval(inter);
    blockTimer.style.color = 'red'
}
function reset() {
    clearInterval(inter);
    hour = 0
    minutes = 0
    seconds = 0
    blockTimer.style.color = 'black'
    blockTimer.innerHTML = `0${hour}:0${minutes}:0${seconds}`
}