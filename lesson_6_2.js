/*const user = { name: "Alex", age: 25 };
const { name: userName } = user;

console.log(`${userName}`);*/


/*const user = {
    name: "Alex",
    age: 25,
    address: {
       city: "Воронеж",
       street: "Вавилова"
    }
};
const { address: { city } } = user;

console.log(address);*/


//const [a, b] = [10, 20, 30]; console.log(a, b);

const { city = 'Москва' } = { name: 'Иван' };
console.log(city);
