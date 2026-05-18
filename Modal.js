export class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.closeBtn = this.modal.querySelector(".close-modal-btn");
        this._initCloseButton();
    }

    open() {
        this.modal.classList.add("modal-showed");
    }

    close() {
        this.modal.classList.remove("modal-showed");
    }

    isOpen() {
        return this.modal.classList.contains("modal-showed");
    }

    _initCloseButton() {
        this.closeBtn.addEventListener("click", () => this.close());
    }
}
