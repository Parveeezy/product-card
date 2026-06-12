const STORAGE_KEY = "async_hw_users";

const statusEl = document.getElementById("status");
const cardsEl = document.getElementById("cards");
const btnGetAll = document.getElementById("btn-get-all");
const btnDelAll = document.getElementById("btn-delete-all");

function getFromStorage() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
}

function saveToStorage(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function showStatus(text, type) {
    statusEl.className = type;
    statusEl.textContent = text;
    statusEl.classList.remove("hidden");

    if (type === "loading") {
        statusEl.classList.add("dot-anim");
    } else {
        statusEl.classList.remove("dot-anim");
    }
}

function hideStatus() {
    statusEl.className = "hidden";
    statusEl.textContent = "";
}

function renderCards(users) {
    cardsEl.innerHTML = "";

    if (users.length === 0) {
        showStatus("Нет пользователей для отображения", "info");
        return;
    }

    hideStatus();

    users.forEach((user) => {
        cardsEl.appendChild(buildCard(user));
    });
}

function buildCard(user) {
    const initials = user.name[0] + user.surname[0];

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = user.id;

    card.innerHTML = `
    <div class="card__avatar">${initials}</div>
    <h3 class="card__name">${user.name} ${user.surname}</h3>
    ${user.role ? `<span class="card__badge">${user.role}</span>` : ""}
    <div class="card__info">
      <span>${user.email}</span>
      <span>Возраст: ${user.age}</span>
      ${user.city ? `<span>${user.city}</span>` : ""}
    </div>
    <button class="card__delete">Удалить</button>
  `;

    card.querySelector(".card__delete").addEventListener("click", () => {
        deleteUser(user.id);
    });

    return card;
}

function deleteUser(id) {
    const users = getFromStorage() || [];
    const updated = users.filter((u) => u.id !== id);
    saveToStorage(updated);
    renderCards(updated);
}

function deleteAllUsers() {
    const users = getFromStorage() || [];

    if (users.length === 0) {
        showStatus("Пользователи уже отсутствуют", "info");
        return;
    }

    saveToStorage([]);
    renderCards([]);
}

function getAllUsers() {
    const users = getFromStorage();

    if (!users || users.length === 0) {
        showStatus("Нет сохранённых пользователей", "info");
        return;
    }

    const visibleCount = cardsEl.querySelectorAll(".card").length;

    if (visibleCount === users.length) {
        showStatus("Все пользователи уже отображены", "info");
        return;
    }

    renderCards(users);
}

function simulateFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch("./users.json");

                if (!response.ok) {
                    reject(new Error(`Ошибка сети: статус ${response.status}`));
                    return;
                }

                const data = await response.json();
                resolve(data.users);
            } catch (err) {
                reject(new Error(`Запрос не выполнен: ${err.message}`));
            }
        }, 2000);
    });
}

async function init() {
    const cached = getFromStorage();

    if (cached) {
        renderCards(cached);
        return;
    }

    showStatus("Данные загружаются", "loading");

    try {
        const users = await simulateFetch();
        saveToStorage(users);
        renderCards(users);
    } catch (error) {
        console.error(error);
        showStatus("Ошибка при загрузке данных", "error");
    }
}

btnGetAll.addEventListener("click", getAllUsers);
btnDelAll.addEventListener("click", deleteAllUsers);

init();
