/*
// Массив для хранения товаров
const products = [];
// Создаем список <ul> для отображения товаров
const listEl = document.createElement('ul');
// Создаем кнопку "Добавить"
const addButtonEl = document.createElement('button');
addButtonEl.textContent = 'Добавить';
// Обработчик клика по кнопке "Добавить"


addButtonEl.addEventListener('click', function () {

    const productName = prompt('Введите название товара');
    const productPrice = Number(prompt('Введите стоимость товара'));
    // Проверка введённых значений
    if (!productName || !productPrice) {
        alert('Введите корректное значение');
        return;
    }
    // Добавляем товар в массив
    products.push({
        name: productName,
        price: productPrice,
    });

    renderList();

});


// addButtonEl.onclick = function () {
//  const productName = prompt('Введите название товара');
//  const productPrice = Number(prompt('Введите стоимость товара'));
//  // Проверка введённых значений
//  if (!productName || !productPrice) {
//    alert('Введите корректное значение');
//    return;
//  }
//  // Добавляем товар в массив
//  products.push({
//    name: productName,
//    price: productPrice,
//  });

//  renderList();
// };

// Элемент для вывода общей цены
const totalPriceEl = document.createElement('div');
// Функция, создающая <li> для каждого товара
function getItemEl(index, item) {
    const itemEl = document.createElement('li');
    itemEl.textContent = `${index + 1}) ${item.name}, стоимость: ${item.price} руб.`;
    // Кнопка "Удалить" для товара
    const deleteButtonEl = document.createElement('button');
    deleteButtonEl.textContent = 'Удалить';

    deleteButtonEl.addEventListener('click', function () {

        products.splice(index, 1); // удаляем товар
        renderList(); // обновляем отображение


    });

    //  deleteButtonEl.onclick = function () {
    //    products.splice(index, 1); // удаляем товар
    //    renderList(); // обновляем отображение
    //  };

    itemEl.append(deleteButtonEl);
    return itemEl;
}

// Функция отрисовки списка и подсчёта общей стоимости
function renderList() {
    let totalPrice = 0;
    listEl.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        listEl.append(getItemEl(i, products[i]));
        totalPrice += products[i].price;
    }

    totalPriceEl.textContent = `Стоимость покупки: ${totalPrice} руб.`;
}

// Добавляем элементы на страницу
document.body.append(listEl, totalPriceEl, addButtonEl);*/


/*function factorial() {

    const cache = {};
    let _n = 0;

    return function factorial_inner(n) {
        if (cache[n] !== undefined) {
            
            console.log("Берем готовое значение: " + cache[n]);
            return cache[n];
        }

        if (_n === 0) {
            _n = n;
            console.log("Рассчитаем для: " + n);
        }

        if (n === 0 || n === 1) {
            cache[n] = 1;
        } else {
            cache[n] = n * factorial_inner(n - 1);
        }

        return cache[n];


    };


}

// Повторные вызовы
const fact_var = factorial();
console.log(fact_var(5));
console.log(fact_var(5));
console.log(fact_var(6));

*/


class Person {

    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    get name(){
        return this._name;
    }

    get surname(){
        return this._surname;
    }

    get age(){
        return this._age;
    }


    set name(value){
        this._name = value;
    }

    set surname(value){
        this._surname=value;
    }

    set age(value){
        this._age=value;
    }

    classToString(){
        console.log(`-=Имя ${this.name}  , Фамилия ${this.surname}   Возраст ${this.age}=-`);

    }

}


let sergey = new Person('Sergey', 'Ivanov', 36);
sergey.classToString();
console.log(`Имя ${sergey.name}  , Фамилия ${sergey.surname}   Возраст ${sergey.age}`);