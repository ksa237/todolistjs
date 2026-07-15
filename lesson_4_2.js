let products = ['Чай','Сок','Пицца','Сыр','Яблоко'];

let listEl = document.createElement('ol');
console.log("length ="+ products.length);

for (let i = 0; i < products.length; i++) {
  let itemEl = document.createElement('li');
  
  itemEl.textContent = products[i];
	listEl.append(itemEl); 
  console.log(i);
}

let bodyEl = document.querySelector('body');
//document.body.append(listEl);

bodyEl.append(listEl);



//------------------------------------------------------

let products = ['Чай','Сок','Пицца','Сыр','Яблоко'];

function pushItem(value) {
  products[products.length]=value;
}

let listEl = document.createElement("ol");

function renderList() {
  listEl.innerHTML="";
  
  for (let i=0; i<products.length;i++){
    let itemEl = document.createElement("li");
    itemEl.textContent = products[i];
    listEl.append(itemEl);
    
  } 
}

renderList();

let addItemEl = document.createElement("button");
addItemEl.textContent = "Добавить товар";

addItemEl.onclick = function() {
  let newItem = prompt("Введите название товара:");
  pushItem(newItem);
  renderList();
  
}
document.body.append(addItemEl, listEl);


//-----------------------------------------------------------