import { Modal } from "./Modal.js";
import { Form } from "./Form.js";

const registerBtn = document.getElementById("register");
const secondPassword = document.getElementById("return-password");

const modal = new Modal("registration-modal");
const subscribeForm = new Form("subscribe");
const registrationForm = new Form("modal-form");

let user = null;

// Подписка (footer)
subscribeForm.form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!subscribeForm.isValid()) return;

    console.log(subscribeForm.getValues());
});

// Открытие модалки
registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.open();
});

// Закрытие по клику на оверлей
modal.modal.addEventListener("click", (e) => {
    if (e.target === modal.modal) {
        modal.close();
    }
});

// Регистрация
registrationForm.form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!registrationForm.isValid()) return;

    const values = registrationForm.getValues();

    if (values.password !== values["return-password"]) {
        secondPassword.classList.add("error");
        console.log("Пароли не совпадают. Регистрация отклонена");
        return;
    }

    secondPassword.classList.remove("error");

    user = {
        name: values.name,
        surname: values.surname,
        login: values.login,
        birthdate: values.birthdate,
        password: values.password,
        createdOn: new Date(),
    };

    console.log(user);

    modal.close();
    registrationForm.reset();
});
