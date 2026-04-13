import { products } from "./products.js";

const cardsContainer = document.querySelector(".cards-container");
const cardsTemplate = document.querySelector(".cards-template");

//Получаем количество карточек, делаем проверку, возвращаем количество карточек
const takeCardsCount = () => {
  const count = +prompt();
  if (isNaN(count)) {
    alert("Введён недопустимый символ, обновите страницу и введите цифру");
    return null;
  }
  return count;
};

// Устанавливаем количество карточек после проверки и возвращаем нужное нам количество карточек
const showCards = () => {
  const cardsLength = takeCardsCount();
  if (cardsLength === null) return [];
  return products.slice(0, cardsLength);
};

const cards = showCards();

// Создаем карточки через template
cards.forEach((product) => {
  
  // Клонируем содержимое template
  const templateContent = cardsTemplate.content.cloneNode(true);

  // Заполняем данные
  const card = templateContent.querySelector(".product-card");
  const img = templateContent.querySelector(".card-img");
  const skinType = templateContent.querySelector(".card-skin-type");
  const title = templateContent.querySelector(".card-title");
  const description = templateContent.querySelector(".card-description");
  const ingredientsWrapper = templateContent.querySelector(
    ".ingredients-wrapper",
  );
  const price = templateContent.querySelector(".card-price");

  img.src = product.image;
  img.alt = product.alternative;
  skinType.textContent = product.type;
  title.textContent = product.title;
  description.textContent = product.description;
  price.innerHTML = `${product.price} &#8381;`;

  // Заполняем состав
  product.makeup.forEach((ingredient) => {
    const li = document.createElement("li");
    li.className = "ingredients";
    li.textContent = ingredient;
    ingredientsWrapper.appendChild(li);
  });

  // Добавляем карточку в контейнер
  cardsContainer.appendChild(card);
});
