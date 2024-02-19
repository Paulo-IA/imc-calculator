import { Modal } from "./modal.js"
import { Form } from "./form.js"
import { Alert } from "./alert.js"

import { calculateIMC } from "./utils.js"

Form.self.addEventListener('submit', handleCalculateIMC)

Form.fields.weight.addEventListener('input', handleCloseAlert)
Form.fields.height.addEventListener('input', handleCloseAlert)

function handleCalculateIMC(event) {
    event.preventDefault();

    if (!Form.isValid()) {
        Alert.open();
        return;
    }

    let { weight, height } = Form.getFieldsValue()

    let result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    Modal.message.textContent = `Seu IMC é de ${result.toFixed(2)}`
    Modal.open()
}

function handleCloseAlert() {
    Alert.close()
}