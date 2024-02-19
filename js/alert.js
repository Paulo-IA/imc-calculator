export const Alert = {
    wrapper: document.querySelector("#alert"),
    open() {
        this.wrapper.classList.add('openAlert')
    },
    close() {
        this.wrapper.classList.remove('openAlert')
    }
}