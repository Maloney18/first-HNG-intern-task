const currentTime = document.querySelector("[data-testId='currentTime']")
const currentDay = document.querySelector("[data-testId='currentDayOfTheWeek']")

const dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var dayLight = new Date().getHours() <= 12 ? 'AM' : 'PM'
var hours = new Date().getHours() > 12 ? new Date().getHours() % 12 : new Date().getHours()
var minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}`: new Date().getMinutes()

currentDay.innerHTML = dayOfTheWeek[new Date().getDay()]
currentTime.innerHTML = `${hours === 0 ? '12' : hours} : ${minutes} ${dayLight}`

setInterval(() => {
    dayLight = new Date().getHours() <= 12 ? 'AM' : 'PM'
    hours = new Date().getHours() > 12 ? new Date().getHours() % 12 : new Date().getHours()
    minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}`: new Date().getMinutes()

    currentDay.innerHTML = dayOfTheWeek[new Date().getDay()]
    currentTime.innerHTML = `${hours === 0 ? '12' : hours} : ${minutes} ${dayLight}`
}, 60000);

const navigate = () => {
    window.open(`https://github.com/Maloney18/first-HNG-intern-task.git`)
}