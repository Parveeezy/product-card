const form = document.getElementById("subscribe");
const inputElement = document.querySelector(".input");

const registerBtn = document.getElementById("register");

const overlay = document.querySelector(".overlay");
const modalForm = document.getElementById("modal-form");
const closeModal = document.querySelector(".close-modal-btn");

const firstPassword = document.getElementById("password");
const secondPassword = document.getElementById("return-password");

// глобальный пользователь
let user = null;

// универсальная проверка формы
const isFormValid = (formElement) => {
    const isValid = formElement.checkValidity();

    if (!isValid) {
        console.log("Форма невалидна");
    }

    return isValid;
};

// Подписка (footer)
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!isFormValid(form)) return;

    console.log({
        email: inputElement.value,
    });
});

// Модалка
registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.classList.add("modal-showed");
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.remove("modal-showed");
    }
});

closeModal.addEventListener("click", () => {
    overlay.classList.remove("modal-showed");
});

// Регистрация
modalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!isFormValid(modalForm)) return;

    const firstPasswordValue = firstPassword.value;
    const secondPasswordValue = secondPassword.value;

    if (firstPasswordValue !== secondPasswordValue) {
        secondPassword.classList.add("error");
        console.log("Пароли не совпадают. Регистрация отклонена");
        return;
    }

    secondPassword.classList.remove("error");

    // 3. создаём пользователя
    user = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        login: document.getElementById("login").value,
        birthdate: document.getElementById("birthdate").value,
        password: firstPasswordValue,
        createdOn: new Date(),
    };

    console.log(user);

    // 4. закрываем модалку
    overlay.classList.remove("modal-showed");

    // очистка формы
    modalForm.reset();
});
