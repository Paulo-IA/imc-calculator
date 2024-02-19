export const Form = {
    self: document.querySelector("#imcForm"),
    fields: {
        weight: document.querySelector("#weight"),
        height: document.querySelector("#height")
    },
    button: document.querySelector("#calcButton"),
    isValid() {
        return ( Number(this.fields.weight.value) && this.fields.weight.value != '') 
            && ( Number(this.fields.height.value) && this.fields.height.value != '') 
    },
    getFieldsValue() {
        return {
            weight: this.fields.weight.value,
            height: this.fields.height.value
        }
    }
}

