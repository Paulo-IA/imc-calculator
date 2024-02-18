const Form = {
    fields: {
        weight: document.querySelector("#weight"),
        height: document.querySelector("#height")
    },
    button: document.querySelector("#calcButton"),
    validate() {
        return ( Number(this.fields.weight.value) && this.fields.weight.value != '') 
            && ( Number(this.fields.height.value) && this.fields.height.value != '') 
    }
}

const Modal = {
    isOpen: false,
    wrapper: document.querySelector("#modal"),
    message: document.querySelector("#modalMessage"),
    closeButton: document.querySelector("#closeModalButton"),
    open() {
        this.wrapper.classList.remove('invisible')
        this.isOpen = true
    },
    close() {
        this.wrapper.classList.add('invisible')
        this.isOpen = false
    }
}

const Alert = {
    wrapper: document.querySelector("#alert"),
    open() {
        this.wrapper.classList.remove('invisible')
    },
    close() {
        this.wrapper.classList.add('invisible')
    }
}

Form.button.addEventListener('click', handleCalcIMC)
Modal.closeButton.addEventListener('click', handleCloseModal)

document.addEventListener('keydown', handleCloseModalWithEscape)
document.addEventListener('keydown', handleSubmitWithEnter)

function handleCloseModal() { Modal.close() }

function handleCalcIMC() {

    if (Form.validate()) {
        let imc = calcImc(Form.fields.weight.value, Form.fields.height.value)

        Modal.message.textContent = `Seu IMC é de ${imc.toFixed(2)}`

        Modal.open()
        Alert.close()
    } else {
        Alert.open()
    }

}

function handleCloseModalWithEscape(e) {
    if (Modal.isOpen && e.key == 'Escape') {
        Modal.close()
    }
}

function handleSubmitWithEnter(e) {
    if (!Modal.isOpen && e.key == 'Enter') {
        handleCalcIMC();
    }
}

function calcImc(w, h) { return w/((h/100) * (h/100)) }