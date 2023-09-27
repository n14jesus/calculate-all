let functions = []
let lastFunction = false

const digitZero = document.getElementById("zero")
const digitOne = document.getElementById("one")
const digitTwo = document.getElementById("two")
const digitThree = document.getElementById("three")
const digitFour = document.getElementById("four")
const digitFive = document.getElementById("five")
const digitSix = document.getElementById("six")
const digitSeven = document.getElementById("seven")
const digitEight = document.getElementById("eight")
const digitNine = document.getElementById("nine")
const addButton = document.getElementById("add")
const equalButton = document.getElementById("calculate")
const clearButton = document.getElementById("reset")
const display = document.getElementById("numbers")

addButton.addEventListener('click', clickAdd)
equalButton.addEventListener('click', clickEquals)
clearButton.addEventListener('click', clickReset)
digitZero.addEventListener('click', clickNumber)
digitOne.addEventListener('click', clickNumber)
digitTwo.addEventListener('click', clickNumber)
digitThree.addEventListener('click', clickNumber)
digitFour.addEventListener('click', clickNumber)
digitFive.addEventListener('click', clickNumber)
digitSix.addEventListener('click', clickNumber)
digitSeven.addEventListener('click', clickNumber)
digitEight.addEventListener('click', clickNumber)
digitNine.addEventListener('click', clickNumber)


function clickNumber(event) {
    if (lastFunction === true) {
        display.value = ""
    }
    display.value += event.target.value
    lastFunction = false
}

function clickAdd() {
    if (display.value !== "" && lastFunction === false) {
        functions.push(Number.parseFloat(display.value))
        functions.push(add)
        lastFunction = true
    }
}

function clickEquals() {
    if (display.value) {
        functions.push(Number.parseFloat(display.value))
    } else {
        functions.push(0)
    }
    let result = functions[0]
    for (let i=1; i<functions.length; i++) {
        if (typeof functions[i] === "function") {
            result = functions[i](result, functions[i+1])
        }
    }
    display.value = result
    functions = []
    display.className = "text-end"
}

function add(num1, num2) {
    return num1 + num2
}

function clickReset() {
    functions = []
}
