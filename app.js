//#5
const inputName = document.querySelector('input#name-input')
const titleName = document.querySelector('span#name-output')
inputName.addEventListener('input', SetName)

function SetName(event) {
    titleName.textContent = event.currentTarget.value
    if (event.currentTarget.value == '') {
        titleName.textContent = "незнайомець"
    }
}

//#6
const inputLength = document.querySelector('input#validation-input')
inputLength.addEventListener('blur', CheckLenght)

function CheckLenght(event) {
    let inputText  = inputLength.value.length
    if (inputText < 6) {
        inputLength.style.borderColor = "red"
    } else {
        inputLength.style.borderColor = "green"
    }
}

//#7
const inputRange = document.querySelector('input#font-size-control')
const span = document.querySelector('span#text')
inputRange.addEventListener('input', CheckRange)

function CheckRange(event) {
    span.style.fontSize = `${event.currentTarget.value}px`
}

//#8 
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]')
const inputAmount = document.querySelector('div#controls > input')
const container = document.querySelector('div#boxes')

inputAmount.addEventListener('input', () => {
    createBtn.addEventListener('click', createBoxes)
    destroyBtn.addEventListener('click', destroyBoxes)
})

function createBoxes(amount) {
    amount = Number(inputAmount.value)
    let t = 0
    for (let i = 1; i <= amount; i += 1) {
        const newDiv =  document.createElement('div')
        newDiv.style.width = `${30+t}px`
        newDiv.style.height = `${30+t}px`
        newDiv.textContent = "New Div"
        container.appendChild(newDiv)
        t += 10
    }
}


function destroyBoxes() {
    container.innerHTML = '';
}
