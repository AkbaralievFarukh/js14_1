const inputNumber = document.querySelector('#input-number')
const btnStart = document.querySelector('#btn-start')
const userNumber = document.querySelector('#user-number')
const resultText = document.querySelector('#result-text')

btnStart.addEventListener('click', () => {
    const getInputNumber = inputNumber.value
    const randomNum = getRandomNum(0, 10)
    userNumber.innerHTML = `Вы выбрали число: ${getInputNumber}`
    if (getInputNumber < 0 || getInputNumber > 10) {
        resultText.innerHTML = `Извините нужно выбрать число от 0 до 10`
    } else if (getInputNumber == randomNum) {
        resultText.innerHTML = `Вы угадали это было число: ${randomNum}`
    } else {
        resultText.innerHTML = `Вы не угадали это было число: ${randomNum}`
    }
})

const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

