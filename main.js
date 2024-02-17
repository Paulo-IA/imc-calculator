const calcButton = document.querySelector("#calcButton")
const closeModalButton = document.querySelector("#closeModalButton")

const alert = document.querySelector("#alert")
const modal = document.querySelector("#modal")

const weightInput = document.querySelector("#weight")
const heightInput = document.querySelector("#height")

const outputElement = document.querySelector("#outputElement")

closeModalButton.addEventListener('click', handleToggleModalVisibility)
calcButton.addEventListener('click', handleCalcIMC)
document.addEventListener('keydown', handleToggleModalVisibilityConditional)
document.addEventListener('keydown', handleSubmitWithEnter)



function handleCalcIMC() {
    if (
        handleCheckInputValue(weightInput) &&
        handleCheckInputValue(heightInput)
    ) {
        let imc = calcImc(weightInput.value, heightInput.value)

        outputElement.textContent = `Seu IMC é de ${imc.toFixed(2)}`

        handleToggleModalVisibility()
        alert.classList.add("invisible")
    } else {
        alert.classList.remove("invisible")
    }

}

function handleCheckInputValue(input) {

    if (Number(input.value) && input.value != '') {
        return true
    }

    return false
}

function handleToggleModalVisibilityConditional(e) {
    if (!modal.classList.contains('invisible') && e.key == 'Escape') {
        handleToggleModalVisibility();
    }
}

function handleSubmitWithEnter(e) {
    if (modal.classList.contains('invisible') && e.key == 'Enter') {
        handleCalcIMC();
    }
}

function handleToggleModalVisibility() {
    modal.classList.toggle('invisible')
}

function calcImc(w, h) {
    return w/((h/100) * (h/100))
}