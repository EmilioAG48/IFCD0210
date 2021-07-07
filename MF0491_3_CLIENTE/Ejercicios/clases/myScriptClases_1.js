// https://www.youtube.com/watch?v=oVZBApbB1_8&t=1172s

class Book{
  constructor(title, author, year, gender){
    this.title = title,
    this.author = author,
    this.year = year,
    this.gender = gender

  }
  bookInfo(){
     return`${this.title} es un libro de ${this.author} escrito
     el año ${this.year} del género ${this.gender}`;
  }
}
// -------------------------------------------------------------
let books = [];

while(books.length < 2){
  let title = prompt('introduce el título ');
  let author = prompt('introduce el author ');
  let year = prompt('introduce el year ');
  let gender = prompt('introduce el gender ').toLowerCase();

//   if(title != '' && author != '' && year !=isNaN(year) && 
//   year.length == 4 && (gender == 'aventura' || 
//   gender == 'terror' || gender == 'fanertasía')){
// books.push(new Book (title, author, year, gender));
//   } 
  books.push(new Book (title, author, year, gender));

}
 const showAllBooks = () => {
  console.log(books); 
 }

 showAllBooks();