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

function addBookToLibrary(name, author, pages, read) {
    let newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    let newBook2 = new Book("LOTR", "JR", "567", "false");
    myLibrary.push(newBook2);
}

function displayMyLibraryBooks() {
    const library = document.querySelector("#library");
    
    myLibrary.forEach((book) => {
        const divBook = document.createElement('div');
        console.log(book);
        divBook.textContent = `${book["name"]} ${book["author"]} ${book["pages"]} ${book["read"]}`;
        library.appendChild(divBook);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    addBookToLibrary("Hobbit", "JR", "234", "false");
    displayMyLibraryBooks();
});
