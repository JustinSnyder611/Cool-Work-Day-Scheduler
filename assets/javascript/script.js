let date = document.getElementById('currentDay')
let time1 = document.getElementById('9am')
let time2 = document.getElementById('10am')
let time3 = document.getElementById('11am')
let time4 = document.getElementById('12pm')
let time5 = document.getElementById('1pm')
let time6 = document.getElementById('2pm')
let time7 = document.getElementById('3pm')
let time8 = document.getElementById('4pm')
let time9 = document.getElementById('5pm')
let times = [time1,time2,time3,time4,time5,time6,time7,time8,time9]
let hour1 = time1.dataset.time
let hour2 = time2.dataset.time
let hour3 = time3.dataset.time
let hour4 = time4.dataset.time
let hour5 = time5.dataset.time
let hour6 = time6.dataset.time
let hour7 = time7.dataset.time
let hour8 = time8.dataset.time
let hour9 = time9.dataset.time
let hours = [hour1,hour2,hour3,hour4,hour5,hour6,hour7,hour8,hour9]
let currentHour = dayjs().get('h')


date.innerHTML = dayjs().format('dddd, MMMM DD, h:mm:ss A')

setInterval(function() {
    date.innerHTML = dayjs().format('dddd, MMMM DD h:mm:ss A')
}, 1000)


for (let i = 0; i < 9; i++) {
    if (currentHour > hours[i]) {
        times[i].className = 'past col';
        times[i].disabled = true;
    }
}

for (let i = 0; i < 9; i++) {
    if (currentHour == hours[i]) {
        times[i].className = 'present col'
        times[i].disabled = true;
    }
}

for (let i = 0; i < 9; i++) {
    if (currentHour < hours[i]) {
        times[i].className = 'future col'
    }
}
window.onload = function() {
    time1.value = localStorage.getItem('stored9am')
    time2.value = localStorage.getItem('stored10am')
    time3.value = localStorage.getItem('stored11am')
    time4.value = localStorage.getItem('stored12pm')
    time5.value = localStorage.getItem('stored1pm')
    time6.value = localStorage.getItem('stored2pm')
    time7.value = localStorage.getItem('stored3pm')
    time8.value = localStorage.getItem('stored4pm')
    time9.value = localStorage.getItem('stored5pm')
}
function nineButton() {
    localStorage.setItem('stored9am', time1.value)
}

function tenButton() {
    localStorage.setItem('stored10am', time2.value)
}

function elevenButton() {
    localStorage.setItem('stored11am', time3.value)
}

function twelveButton() {
    localStorage.setItem('stored12pm', time4.value)
}

function oneButton() {
    localStorage.setItem('stored1pm', time5.value)
}

function twoButton() {
    localStorage.setItem('stored2pm', time6.value)
}

function threeButton() {
    localStorage.setItem('stored3pm', time7.value)
}

function fourButton() {
    localStorage.setItem('stored4pm', time8.value)
}

function fiveButton() {
    localStorage.setItem('stored5pm', time9.value)
}


function nineTrash() {
    localStorage.removeItem('stored9am')
    time1.value = ''
}

function tenTrash() {
    localStorage.removeItem('stored10am')
    time2.value = ''
}

function elevenTrash() {
    localStorage.removeItem('stored11am')
    time3.value = ''
}

function twelveTrash() {
    localStorage.removeItem('stored12pm')
    time4.value = ''
}

function oneTrash() {
    localStorage.removeItem('stored1pm')
    time5.value = ''
}

function twoTrash() {
    localStorage.removeItem('stored2pm')
    time6.value = ''
}

function threeTrash() {
    localStorage.removeItem('stored3pm')
    time7.value = ''
}

function fourTrash() {
    localStorage.removeItem('stored4pm')
    time8.value = ''
}

function fiveTrash() {
    localStorage.removeItem('stored5pm')
    time9.value = ''
}