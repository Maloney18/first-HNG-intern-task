const currentTime = document.querySelector(".current-time")
const currentDay = document.querySelector(".current-day")

const time = () => {
    const dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayLight = new Date().getHours() <= 12 ? 'AM' : 'PM'
    const hours = new Date().getHours() > 12 ? new Date().getHours() % 12 : new Date().getHours()
    const minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}`: new Date().getMinutes()

    currentDay.innerHTML = dayOfTheWeek[new Date().getDay()]
    currentTime.innerHTML = `${hours === 0 ? '12' : hours} : ${minutes} ${dayLight}`
}

const navigate = () => {
    window.open(`https://github.com/Maloney18/first-HNG-intern-task.git`)
}

time()