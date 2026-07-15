const myLink = document.querySelector('a');

myLink.classList.add("selected");

console.log(myLink.href);
console.log(myLink.textContent);

myLink.textContent = "Личный кабинет";
myLink.href = "https://my.selectel.ru/";
