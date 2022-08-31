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
let currentHour = dayjs().get('hour')

date.innerHTML = dayjs().format('dddd, MMMM DD, h:mm:ss A')

setInterval(function() {
    date.innerHTML = dayjs().format('dddd, MMMM DD h:mm:ss A')
}, 1000)

for (let i = 0; i < 9; i++) {
    if (currentHour == hours[i]) {
        times[i].className = 'present col'
    }
}

for (let i = 0; i < 9; i++) {
    if (currentHour > hours[i]) {
        times[i].className = 'past col'
    }
}

for (let i = 0; i < 9; i++) {
    if (currentHour < hours[i]) {
        times[i].className = 'future col'
    }
}