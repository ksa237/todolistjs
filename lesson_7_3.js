const button = document.createElement('button');
button.textContent = "Кнопка";

button.addEventListener('click', function(event){
    console.log(event);
})


const handleClick = function(event) {
  console.log("Вы кликнули по кнопке : "+event.target.textContent);
};

for (let i of [1,2,3,4,5]){
  const button = document.createElement('button');
  button.textContent = `кнопка ${i}`;
  button.addEventListener('click', handleClick);
  document.body.append(button);
}


document.addEventListener('keydown', function(event){
  //console.log(`нажата клавиша ${event.key}`);
  console.log(event.button);
});unction(event)