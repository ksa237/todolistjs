/*const favoriteProductsIDs = [123, 456, 345, 765];
const currentProdId = 345;

const isFavorite = favoriteProductsIDs.includes(currentProdId);

console.log("код " + currentProdId + (isFavorite ? " присутствует" : " отсутствует") + " в корзине покупателя");*/


/*const students = ["Alex", "Nickolay", "Lee", "Mihalainen",  "Lee"];

const leeIndex = students.indexOf('Lee');
console.log("id = "+leeIndex);*/

/*const todoList = ["Поесть", "Попить кофе", "Написать статью", "Поспать"];
const taskIndex = todoList.indexOf("Поесть");
//if (taskIndex !== -1) {
    // Удаляем элемент
    todoList.splice(taskIndex,1);
//}
console.log(todoList);*/



/*const users = ["sasha@mail.com", "masha@mail.com", "pasha@mail.com"];
users.forEach((el)=>{
    console.log(`${el}`);
});*/

/*const users = ["sasha@mail.com", "masha@mail.com", "pasha@mail.com"];
users.forEach(function (user, index) {
    console.log(`${index + 1}: ${user}`);
});*/

const users = ["sasha@mail.com", "masha@mail.com", "pasha@mail.com"];
let masha = users.find((mail)=>{
    return mail==="masha@mail.com";
});

console.log(masha);