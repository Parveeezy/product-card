import "./homework-8.js";
import "./homework-9.js";
import "./homework-11.js";

class Book {
    constructor(title, author, year, pages) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.rating = null;
    }

    rate(value) {
        this.rating = value;
        return `${this.title} — оценка: ${this.rating}/5`;
    }

    describe() {
        return `"${this.title}" | автор: ${this.author} | год: ${this.year} | стр: ${this.pages} | рейтинг: ${this.rating ?? "нет"}`;
    }
}

class Fiction extends Book {
    constructor(title, author, year, pages, genre) {
        super(title, author, year, pages);
        this.genre = genre;
    }

    describe() {
        return `${super.describe()} | жанр: ${this.genre}`;
    }
}

class Novel extends Fiction {
    constructor(title, author, year, pages, genre, series) {
        super(title, author, year, pages, genre);
        this.series = series;
    }

    describe() {
        return `${super.describe()} | серия: ${this.series ?? "нет"}`;
    }
}

class ShortStory extends Fiction {
    constructor(title, author, year, pages, genre) {
        super(title, author, year, pages, genre);
    }

    readingTime() {
        return `примерно ${this.pages} минут`;
    }
}

class NonFiction extends Book {
    constructor(title, author, year, pages, topic) {
        super(title, author, year, pages);
        this.topic = topic;
    }

    describe() {
        return `${super.describe()} | тема: ${this.topic}`;
    }
}

class Educational extends NonFiction {
    constructor(title, author, year, pages, topic, subject) {
        super(title, author, year, pages, topic);
        this.subject = subject;
    }

    describe() {
        return `${super.describe()} | предмет: ${this.subject}`;
    }
}

class Biography extends NonFiction {
    constructor(title, author, year, pages, topic, person) {
        super(title, author, year, pages, topic);
        this.person = person;
    }

    describe() {
        return `${super.describe()} | о ком: ${this.person}`;
    }
}

const book1 = new Novel("Мастер и Маргарита", "Булгаков", 1967, 480, "мистика", "нет");
const book2 = new Novel("Властелин колец", "Толкин", 1954, 1200, "фэнтези", "Средиземье");
const book3 = new ShortStory("Маленький принц", "Сент-Экзюпери", 1943, 96, "сказка");
const book4 = new Educational("Алгоритмы", "Кормен", 2009, 1292, "программирование", "информатика");
const book5 = new Biography("Стив Джобс", "Айзексон", 2011, 656, "бизнес", "Стив Джобс");

book1.rate(5);
book2.rate(5);
book4.rate(3);

console.log(book1.describe());
console.log(book3.describe());
console.log(book5.describe());
