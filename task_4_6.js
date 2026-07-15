let product = {
    name : "Молоко",
    price : 170
};

product.category = "Напитки";
product.price = product.price - 50;

console.log(`Товар: ${product.name}, цена: ${product.price}, категория: ${product.category}`);


let user = {
    name: "Иван",
    age : 43,
    address : {
        city : "Волгодонск",
        street : "Яблоневая" 
    }

};


let products = [
    { name: "Телефон", price: 50000 },
    { name: "Наушники", price: 5000 }
];

product.push({
    name : "Мышь",
    price : 1800    
});

product[3] = {
    name : "Мышь",
    price : 1800    
};
