/*
    CIT 281 Lab 06
    Danielle Mendoza
*/

// create Book class
class Book {
    constructor(title, author, pubDate, ISBN10) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.ISBN10 = ISBN10;
    }
  }

  // Create a book
//const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018");
//console.log(atomicHabits)

// create Library class
class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "" , ISBN10 = ""} = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, ISBN10 };
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, ISBN10} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN10: ${ISBN10}`)
      }
    }
    // Add a deleteBook(isbn) method to the Library class, to delete a Book from the Library using the ISBN
    deleteBook(isbn) {
        const copyBooks = [];
        const isbnFromClient = isbn;
        for (const book of this._books) {
            const {ISBN10} = book;
            if (ISBN10 !== isbnFromClient) {
                copyBooks.push(book)
                console.log(ISBN10)
            } 
        }
        this._books = copyBooks
    }
  }

  
// test
// Create library object
const library = new Library("New York Times Best Seller List");

// Create a book atomichabits and add two more books
//const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "1");
const minorfeelings = new Book("Minor Feelings", "Cathy Park Hong", "02/25/2020", "1984820389")
const makrofathena = new Book("Mark of Athena", "Rick Riordan", "10/02/2012", "1423142004")

/*
// Add book to library and output library count and books
library.addBook(atomicHabits);
library.addBook(minorfeelings);
library.addBook(makrofathena);
library.deleteBook("2")
console.log(`Book count: ${library.count}`);
library.listBooks()

*/

// PART 7 TESTING CODE


// Create books
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const theHillWeClimb = new Book("The Hill We Climb", "David Baldacci", "03/30/2021", "059346527X");
const oceanPrey = new Book("Atomic Habits", "John Sandford", "04/13/2021", "1398505501");

// Add books to library and output library count and books
library.addBook(atomicHabits);
library.addBook(theHillWeClimb);
library.addBook(oceanPrey);
console.log(`Book count: ${library.count}`);
library.listBooks();

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("059346527X");
library.listBooks();
