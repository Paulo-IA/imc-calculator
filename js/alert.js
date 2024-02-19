export const Alert = {
    wrapper: document.querySelector("#alert"),
    open() {
        this.wrapper.classList.remove('invisible')
    },
    close() {
        this.wrapper.classList.add('invisible')
    }
}