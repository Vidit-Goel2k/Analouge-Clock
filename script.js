const hourHand = document.querySelector("[data-hour-hand]")
const minuteHand = document.querySelector("[data-minute-hand]")
const secondHand = document.querySelector("[data-second-hand]")

const setClock = () => {
    const currentDate = new Date()

    const secondRatio = currentDate.getSeconds() / 60
    setRotation(secondHand, secondRatio)

    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60 
    setRotation(minuteHand, minuteRatio)

    const hourRatio = (minuteRatio + currentDate.getHours()) / 12
    setRotation(hourHand, hourRatio)
}

const setRotation = (element, rotationRatio) => {
    element.style.setProperty('--handRotation', rotationRatio * 360)
}
setClock()
setInterval(setClock, 1000)