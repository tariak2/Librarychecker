function GetAllBooks() {
    var books = [
        { title: 'Minds Key', author: 'James Joyce', available: true },
        { title: 'A Farewell to Amrs', author: 'Ernest Hemingway', available: false },
        { title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true }
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
var allBooks = GetAllBooks();
allBooks.push({ title: 'Good Morning Holy Ghost', author: 'Doxa Okoro', available: true });
LogFirstAvailable(allBooks);
//# sourceMappingURL=app.js.map