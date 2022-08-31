let date = document.getElementById('currentDay')

date.innerHTML = dayjs().format('dddd, MMMM DD, h:mm:ss A')

setInterval(function() {
    date.innerHTML = dayjs().format('dddd, MMMM DD h:mm:ss A')
}, 1000)