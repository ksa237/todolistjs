

function createProduct(pName, pPrice){

    return {
        name: pName,
        price: pPrice,
        getTotalPrice: function (ammount) {
            return ammount * this.price;
        },
        getInfo: function(){
            return "товар "+this.name+" по цене "+this.price;
        }
    }   

}


milk = createProduct("Молоко Грин-агро", 174);
console.log(milk.getTotalPrice(2));
console.log(milk.getInfo());

