 function GetAllBooks() {

        let books = [
            { title: 'Minds Key', author: 'James Joyce', available: true },
            { title: 'A Farewell to Amrs', author: 'Ernest Hemingway', available: false },
            { title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true }
        ];
        return books;
 }

 function LogFirstAvailable(books: any) {
      
     let numberOfBooks = books.length;
     let firstAvailable = '';

     for(let currentBook of books) {
         
        
 
         if(currentBook.available) {
             firstAvailable = currentBook.title;
             break;
         }
     }
     console.log('Total Books: ' + numberOfBooks);
     console.log('First Available: ' + firstAvailable);

 }

const allBooks = GetAllBooks();
allBooks.push ({title: 'Good Morning Holy Ghost', author:'Doxa Okoro', available: true});
LogFirstAvailable(allBooks);