/*const books = ['Аэлита','Туманность Андромеды','Человек-амфибия','Пикник на обочине','Голова профессора Доуэля'];


const booksEdit = books.map(book => {
   return book = book + ' СССР';
});

console.log(booksEdit);*/



//-------------------------------------------------------------------


/*const books = [
  { book: "Трудно быть богом", author: "Аркадий и Борис Стругацкие", year: 1964 },
  { book: "Пикник на обочине", author: "Аркадий и Борис Стругацкие", year: 1972 },
  { book: "Туманность Андромеды", author: "Иван Ефремов", year: 1957 },
  { book: "Час Быка", author: "Иван Ефремов", year: 1968 },
  { book: "Человек-амфибия", author: "Александр Беляев", year: 1928 },
  { book: "Голова профессора Доуэля", author: "Александр Беляев", year: 1925 },
  { book: "Полдень, XXII век", author: "Аркадий и Борис Стругацкие", year: 1962 },
  { book: "Сто лет тому вперёд", author: "Кир Булычёв", year: 1978 },
  { book: "Посёлок", author: "Кир Булычёв", year: 1988 },
  { book: "Аэлита", author: "Алексей Толстой", year: 1923 }
];

const oldBooks = books.filter(el=>{
   return el.year <= 1950;
});

//console.log(oldBooks);
console.log(JSON.stringify(oldBooks, null, 2));*/

//------------------------------------------------------------------


const books = [
  { book: "Трудно быть богом", author: "Аркадий и Борис Стругацкие", year: 1964 },
  { book: "Пикник на обочине", author: "Аркадий и Борис Стругацкие", year: 1972 },
  { book: "Туманность Андромеды", author: "Иван Ефремов", year: 1957 },
  { book: "Час Быка", author: "Иван Ефремов", year: 1968 },
  { book: "Человек-амфибия", author: "Александр Беляев", year: 1928 },
  { book: "Голова профессора Доуэля", author: "Александр Беляев", year: 1925 },
  { book: "Полдень, XXII век", author: "Аркадий и Борис Стругацкие", year: 1962 },
  { book: "Сто лет тому вперёд", author: "Кир Булычёв", year: 1978 },
  { book: "Посёлок", author: "Кир Булычёв", year: 1988 },
  { book: "Аэлита", author: "Алексей Толстой", year: 1923 }
];

const booksByYears = [...books].sort((a,b)=>{
   return b.year - a.year;
});

console.log(JSON.stringify(booksByYears, null, 3));