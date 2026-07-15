
/*function processUser(name) {
  console.log(`Пользователь: ${name}`);
}

function run(name, processUser){
    processUser(name);
}

run("Оля", processUser);*/


//-----------------------------------------------
/*
function square(num){
    console.log(Number(num*num));
}

function multi10(num){
    console.log(Number(num*10));
}


function processNumber(myNum, myCallback){
    myCallback(myNum);
}

processNumber(5,square);
processNumber(5, multi10);*/



//-------------------------------------------------

function discountToPriceMore500(price){

    if (price === 500 ) {
        return price;
    }   
    return price > 500 ? price - 100 : price < 100 ? 0 : price;
}

function discountToPriceAll50(price){
    
    if (price === 50 ) {
        return price;
    } 

     if (price < 50 ) {
        return 0;
    } 
    return price - 50;

}

function applyDiscount(price, discountFn){

    console.log("Цена: " + Number(price) + ", цена со скидкой: " + discountFn(price) );

}

applyDiscount(1200, discountToPriceMore500);
applyDiscount(400, discountToPriceMore500);
applyDiscount(50, discountToPriceMore500);

console.log("\n");

applyDiscount(300, discountToPriceAll50);
applyDiscount(40, discountToPriceAll50);