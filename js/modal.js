export const Modal = {
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

Modal.closeButton.addEventListener('click', handleCloseModal)

function handleCloseModal() { Modal.close() }

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(e) {
    if (e.key == 'Escape') {
        Modal.close()
    }
}