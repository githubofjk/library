const btnNewBook = document.querySelector("#btnNewBook");
const btnSubmit = document.querySelector("#btnSubmit");

let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${name} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary(name, author, pages, read) {
  let newBook = new Book(name, author, pages, read);
  myLibrary.push(newBook);
}

function displayMyLibraryBooks() {
  const library = document.querySelector("#library");

  myLibrary.forEach((book) => {
    const divBook = document.createElement("div");
    divBook.textContent = book.info();
    library.appendChild(divBook);
  });
}

function newBook() {
  btnNewBook.setAttribute("style", `background-color: green;`);
  // TODO show form for fnew book
}

function submitForm() {
    const name = document.querySelectorAll("input")[0].value;
    const author = document.querySelectorAll("input")[1].value;
    const pages = document.querySelectorAll("input")[2].value;
    const read = document.querySelectorAll("input")[3].value;
    
    addBookToLibrary(name, author, pages, read);
    displayMyLibraryBooks();
}

btnNewBook.addEventListener("click", newBook);
btnSubmit.addEventListener("click", submitForm);
