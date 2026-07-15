const product = {
    name: "Кофе",
    price: 600,
    count: 2,
    getTotalPrice: function () {
        return this.price * this.count;
    }
};

const getTotalPrice2 =  product.getTotalPrice;
console.log(getTotalPrice2());