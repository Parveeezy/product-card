//Level 1

// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом,
// что бы мы получил массив чисел, начиная с 5.

const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = arrOfNumbers.filter((el) => el > 4);

console.log(filteredArray);

// 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг,
// кухонные приборы, мебель и т.д.), проверить,
// есть ли в массиве какая-то определенная сущность.

const arrOfStrings = ["Vikings", "Harry Potter", "James Bond", "Spider-man"];

console.log(arrOfStrings.includes("Spider-man"));

// 4. Написать функцию, которая аргументом будет принимать массив и
// изменять его порядок на противоположный ("переворачивать") .
// Два вышеуказанных массива с помощью этой функции перевернуть.

const getReverseArray = (arr) => {
  return arr.reverse();
};

console.log(getReverseArray(arrOfStrings));

//Level 2

import { comments } from "./comments.js";

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const showComments = (arr) => {
  const filteredComments = arr
    .filter((comment) => comment.email.endsWith(".com"))
    .map((el) => el.body);
  console.log(filteredComments);
};

showComments(comments);

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 
// имели postId: 2, а те, у кого id больше 5, имели postId: 1

const getChangedPostId = (arr) => {
  return arr.map((el) =>
    el.id <= 5 ? { ...el, postId: 2 } : { ...el, postId: 1 },
  );
};

console.log(getChangedPostId(comments));

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const transformObjectsFromArray = comments.reduce((acc, el) => {
  acc.push({ id: el.id, name: el.name });
  return acc;
}, []);

console.log(transformObjectsFromArray);

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
// если длина тела сообщения (body) больше 180 символов - 
// устанавливаем true, меньше - false.

const setNewObjectKey = comments.map((el) =>
  el.body.length > 180 ? { ...el, isValid: true } : { ...el, isValid: false },
);

console.log(setNewObjectKey);

//Level 3

// 11. Почитать про метод массива reduce. Используя его, 
// вывести массив почт и провернуть тоже самое с помощью метода map

const getEmailFromReduce = comments.reduce((acc, el) => {
  acc.push(el.email);
  return acc;
}, []);

console.log(getEmailFromReduce);

const getEmailFromMap = comments.map((el) => el.email);

console.log(getEmailFromMap);

// 12. Почитать про методы toString(), join() и перебрав массив с 
// задания №11, привести его к строке.

const transformToString = getEmailFromReduce.toString();

console.log(transformToString);

const transformToStringWithJoin = getEmailFromReduce.join(", ");

console.log(transformToStringWithJoin);
