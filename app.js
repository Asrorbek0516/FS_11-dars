import { books } from "./data.js";

// function addBook(title, author, price) {

//     let newBook = {
//         id: books.length + 1,
//         title: title,
//         author: author,
//         price: price,
//         isRead: false
//     };

//     books.push(newBook);

// }

// console.log(addBook("Mehrobdan chayon", "Abdulla Qahhor", 42000));
// console.log(books);

// function showBooks() {
//     books.forEach((book) => {
//         console.log(
//             book.id,
//             book.title,
//             book.author,
//             book.price,
//             book.isRead
//         );
//     });

//     return books;
// }

// console.log(showBooks());



// function updatePrice(id, newPrice) {

//     let book = books.find((book) => book.id === id);

//     if (book) {
//         book.price = newPrice;
//         return book;
//     }

//     return null;
// }

// console.log(updatePrice(2,70000));


function deleteBook(id) {

    books = books.filter((book) => book.id !== id);

    return books;
}

console.log(deleteBook(1));


