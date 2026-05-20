// АБСТРАКТНЫЙ КЛАСС
class Drink {
    #temperature;

    constructor(name, size, price, temperature) {
        if (new.target === Drink) {
            throw new Error('Drink — абстрактный класс, нельзя создавать его экземпляры напрямую');
        }
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

// Общий метод для всех напитков
    getInfo() {
        return `Напиток: ${this.name} | Размер: ${this.size} мл | Цена: ${this.price}₽ | Температура: ${this.#temperature}°C`;
    }

    getTemperature() {
        return this.#temperature;
    }

    setTemperature(newTemp) {
        if (typeof newTemp !== 'number' || newTemp < -10 || newTemp > 100) {
            throw new Error(`Некорректная температура: ${newTemp}`);
        }
        this.#temperature = newTemp;
    }

    #prepare() {
        console.log(`Готовим "${this.name}"...`);
    }

    serve() {
        this.#prepare();
        console.log(`"${this.name}" готов! Температура: ${this.getTemperature()}°C`);
    }
}


//НАСЛЕДНИКИ
class Coffee extends Drink {
    constructor(name, size, price, beanType, milkType) {
        super(name, size, price, 90);
        this.beanType = beanType;
        this.milkType = milkType;
    }

    getInfo() {
        return `${super.getInfo()} | Зёрна: ${this.beanType} | Молоко: ${this.milkType}`;
    }
}

class Tea extends Drink {
    constructor(name, size, price, teaType, withLemon) {
        super(name, size, price, 85);
        this.teaType = teaType;
        this.withLemon = withLemon;
    }

    getInfo() {
        const lemon = this.withLemon ? 'с лимоном' : 'без лимона';
        return `${super.getInfo()} | Тип: ${this.teaType} | ${lemon}`;
    }
}


class Lemonade extends Drink {
    constructor(name, size, price, flavor, withIce) {
        super(name, size, price, 5);
        this.flavor = flavor;
        this.withIce = withIce;
    }

    getInfo() {
        const ice = this.withIce ? 'со льдом' : 'без льда';
        return `${super.getInfo()} | Вкус: ${this.flavor} | ${ice}`;
    }
}


class Smoothie extends Drink {
    constructor(name, size, price, fruits, withYogurt) {
        super(name, size, price, 8);
        this.fruits = fruits;
        this.withYogurt = withYogurt;
    }

    getInfo() {
        const yogurt = this.withYogurt ? 'с йогуртом' : 'без йогурта';
        return `${super.getInfo()} | Фрукты: ${this.fruits.join(', ')} | ${yogurt}`;
    }
}


class HotChocolate extends Drink {
    constructor(name, size, price, chocolateType, withCream) {
        super(name, size, price, 70);
        this.chocolateType = chocolateType;
        this.withCream = withCream;
    }

    getInfo() {
        const cream = this.withCream ? 'со сливками' : 'без сливок';
        return `${super.getInfo()} | Шоколад: ${this.chocolateType} | ${cream}`;
    }
}


//КЛАСС КАФЕ
class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getInfo() {
        console.log(`\nКафе: "${this.name}" | Адрес: ${this.location}`);
    }

    orderDrink(drink) {
        console.log(`\n--- Заказ в "${this.name}" ---`);
        console.log(drink.getInfo());
        drink.serve();
    }
}

const cafe = new Cafe('Уютный уголок', 'ул. Пушкина, д. 10');
cafe.getInfo();

const cappuccino = new Coffee('Капучино', 300, 350, 'Арабика', 'Овсяное');
const greenTea = new Tea('Зелёный чай', 250, 200, 'Зелёный', true);
const lemonade = new Lemonade('Клубничный лимонад', 400, 280, 'Клубника', true);
const smoothie = new Smoothie('Тропический смузи', 350, 320, ['Манго', 'Банан', 'Ананас'], true);
const hotChocolate = new HotChocolate('Горячий шоколад', 300, 300, 'Тёмный', true);

cafe.orderDrink(cappuccino);
cafe.orderDrink(greenTea);
cafe.orderDrink(lemonade);
cafe.orderDrink(smoothie);
cafe.orderDrink(hotChocolate);

console.log('Температура до:', greenTea.getTemperature() + '°C');
greenTea.setTemperature(60);
console.log('Температура после setTemperature(60):', greenTea.getTemperature() + '°C');
