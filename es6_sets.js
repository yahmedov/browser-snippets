// Sets are collections of data (of any tipe)
// all the values are unique (no duplicates)

let books = new Set();

books.add('Pride and Prejudice');
books.add('War and Peace').add('Another book');

console.log(books);
console.log(books.size);
console.log(books.has('Oliver Twist'));
console.log(books[0]); // undefined, cannot access set values by index

const booksArray = [...books];
console.log(booksArray[0]);