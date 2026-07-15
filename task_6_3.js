/*const defaults = { host: 'localhost', port: 3000 };
const userOptions = { port: 8080, secure: true };

const setting = {...defaults, ...userOptions};

console.log(JSON.stringify(setting, null, 4));*/

const cart = ['Смартфон','Чехол','Зарядное устройство','наушники','Колонка'];

function showProducts(...mycart) {

    console.log(mycart);
    

}



showProducts(...cart);