let products = ['Чай','Кофе','Сок','Вода','Милкис'];

for (let index = 0 ; index < products.length; index++) {
  console.log("Товар №"+Number(index+1)+" : "+products[index] );
}


//--------------------------------
let shoppingList = [];
for (let i=0 ;i<=3; i++){
  shoppingList[i]= "товар "+Number(i+1);
}

shoppingList.push("Apple");
shoppingList.unshift("Окунь горячего копчения");
/*shoppingList.pop();
shoppingList.shift();*/

console.log(shoppingList);
//----------------------------------

let products = ['Кофе', 'Чай', 'Сок', 'Вода', 'Яблоки'];
console.log(products[2]);
products[2] = "Orange juce";
console.log(products[2]);

//----------------------------------
let products = ['Кофе', 'Чай', 'Сок', 'Вода', 'Яблоки'];

let ul = document.createElement("ul");

for (i=0; i<products.length; i++){
  let li = document.createElement("li");
  li.textContent = products[i];
  ul.append(li);
}

document.body.append(ul);
//---------------------------------