import { products } from "./products.js";

const cardsContainer = document.querySelector(".cards-container");
const cardsTemplate = document.querySelector(".cards-template");

// Получаем валидное количество карточек с рекурсией
const getValidCardCount = () => {
  const maxCount = products.length;
  const userInput = prompt(`Введите количество карточек (1-${maxCount}):`);
  
  // Проверка на отмену
  if (!userInput) {
    alert("Вы отменили ввод. Будет показано 0 карточек.");
    return 0;
  }
  
  const count = Number(userInput);
  
  // Валидация ввода
  if (isNaN(count)) {
    alert("Ошибка! Введите число.");
    return getValidCardCount();
  }
  
  if (!Number.isInteger(count)) {
    alert("Ошибка! Введите целое число.");
    return getValidCardCount();
  }
  
  if (count < 1) {
    alert("Ошибка! Число должно быть больше 0.");
    return getValidCardCount();
  }
  
  if (count > maxCount) {
    alert(`Ошибка! Максимальное количество - ${maxCount}.`);
    return getValidCardCount();
  }
  
  return count;
};

// Получаем массив карточек для отображения
const getCardsToShow = () => {
  const cardsCount = getValidCardCount();
  return products.slice(0, cardsCount);
};

// Рендер карточки
const renderCards = (cards) => {
  cards.forEach((card) => {
    // Клонируем содержимое template
    const templateContent = cardsTemplate.content.cloneNode(true);
    
    // Находим элементы в клоне
    const cardElement = templateContent.querySelector(".product-card");
    const img = templateContent.querySelector(".card-img");
    const skinType = templateContent.querySelector(".card-skin-type");
    const title = templateContent.querySelector(".card-title");
    const description = templateContent.querySelector(".card-description");
    const ingredientsWrapper = templateContent.querySelector(".ingredients-wrapper");
    const priceElement = templateContent.querySelector(".card-price");
    
    // Заполняем данные
    img.src = `./assets/${card.image}.png`;
    img.alt = card.image;
    skinType.textContent = card.type;
    title.textContent = card.title;
    description.textContent = card.description;
    priceElement.innerHTML = `${card.price.toLocaleString('ru-RU')} &#8381;`
    
    // Заполняем состав
    card.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.className = "ingredients";
      li.textContent = ingredient;
      ingredientsWrapper.appendChild(li);
    });
    
    // Добавляем готовую карточку в контейнер
    cardsContainer.appendChild(cardElement);
  });
};

// Отрисовка карточек
renderCards(getCardsToShow());