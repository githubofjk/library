let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${name} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary() {
    let newBook = new Book("Hobbit", "JR", "234", "false");
    myLibrary.push(newBook);
    console.log(myLibrary);
}

window.addEventListener("DOMContentLoaded", addBookToLibrary);