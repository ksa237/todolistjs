/*function createCounter(){
    let count = 0;

    return function counter() {
        count++;
        console.log("Счет : "+count);
    };
}

console.log("-=Первый счетчик=-");


const myCounter = createCounter();

myCounter();
myCounter();
myCounter();

const myCounter2 = createCounter();

console.log("-=Второй счетик=-");
myCounter2();
myCounter2();*/

function createUser(name, age){
    const user = {};
    user.name = name;
    user.age = age;

    user.greet = function () {
        console.log(`Привет, я ${this.name}`);
    };
    return user;
};

const users = [
    createUser("Anna", 36),
    createUser("Evgeniy", 25),
    createUser("Olya", 19)
];

users.forEach((user)=>user.greet());