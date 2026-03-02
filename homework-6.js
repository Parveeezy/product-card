//  Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна, город, статус отношений

const user = {
  firstName: "Parviz",
  lastName: "Shirinov",
  email: "p.shirinov25@gmail.com",
  job: "RANEPA",
  jobTitle: "System Administrator",
  age: 33,
  country: "Russia",
  city: "Moscow",
  married: true,
  childrenCount: 3,
};

// Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки).

const car = {
  brand: "Range Rover",
  model: "Sport",
  year: 2017,
  color: "Black",
  transmission: "Automatic",
  carOwner: user,
};

// Написать функцию которая аргументом будет принимать объект, описанный в пункте №4.
// Она проверяет, есть ли в объекте свойство "максимальная скорость",
// если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает)

const getMaxSpeed = (car) => {
  if (!Object.keys(car).hasOwnProperty("maxSpeed")) {
    return { ...car, maxSpeed: 260 };
  }
  return;
};

checkMaxSpeed(car);

// 6. Написать функцию, которая получает первым аргументом  — объект,
// а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

const showPropertyValue = (obj, value) => {
  if (value in obj) {
    console.log(obj[value]);
  }
};

getPropertyValue(user, "job");

// 7. Создать массив, который содержит названия продуктов (просто строки)

const products = ["apple", "potato", "juice", "carrot", "bread", "milk"];

// 8. Создать массив, состоящий из объектов, где объект представляет собой книгу
// (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг).
// После, используя известный нам метод массив, добавить еще одну книгу в конец списка.
// Можете заменить книги на фильмы, или другую сущность, идею вы поняли.

const books = [
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    year: 1999,
    coverColor: "purple and teal",
    genre: "fantasy novel",
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    year: 1846,
    coverColor: "deep red",
    genre: "historical adventure novel and a revenge thriller",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    coverColor: "orange",
    genre: "quest adventure",
  },
];

books.push({
  title: "Crime and Punishment",
  author: "Fyodor Dostoevsky",
  year: 1866,
  coverColor: "black",
  genre: "psychological fiction and literary realism",
});

// 9. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной
// (Гарри Поттер, Марвел и так далее). (Если используете другую, свою сущность - импровизируйте).
// С помощью известного нам метода массива или оператора (рекомендую использовать оператор),
// объединить эти два массива в один

const moreBooks = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    coverColor: "red and yellow",
    genre: "fantasy novel",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    year: 1998,
    coverColor: "red and green",
    genre: "fantasy novel",
  },
];
const allBooks = [...books, ...moreBooks];

// 10. Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9.
// Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги
// (или какой-то логики, связанной с вашей сущностью), устанавливаем true или false.
// Что я хочу этим сказать: если книга выпущена позже 2000 года, устанавливаем true (да, это редкий),
// нет - false (значит это не редкий).

const getRareBooks = (books) => {
  return books.map((el) => ({ ...el, isRare: el.year < 1990 }));
};

getRareBooks(allBooks);
