/*const prices = [100, 250, 500, 1000];

const wCurrency = prices.map ( el => {
    el = el + " руб.";
    return el;
});

console.log(wCurrency);*/



/*const numbers = [-10, 5, 0, 12, -3, 8];

const numMore0 = numbers.filter(el=>{
    return el > 0;
});

console.log(numMore0);*/


/*const numbers = [10, 3, 25, 1, 7];
const sortAsc = [...numbers].sort((a, b)=>{
    return a-b;
});
console.log(sortAsc);*/

/*const numbers = [10, 3, 25, 1, 7];
const sortAsc = [...numbers].sort((a, b)=>{
    return b-a;
});
console.log(sortAsc);*/

const users = [
 { name: 'Оля', age: 17 },
 { name: 'Петя', age: 20 },
 { name: 'Анна', age: 15 },
 { name: 'Иван', age: 18 }
];

const users18 = users
    .filter((el)=>{
    return el.age > 18;
})
    .map(el=>{
    return el.name;
});



console.log(users18);