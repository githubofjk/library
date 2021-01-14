const btnNewBook = document.querySelector("#btnNewBook");
const btnSubmit = document.querySelector("#btnSubmit");
const formSubmitNewBook = document.querySelector("#submitNewBook");
const library = document.querySelector("#library");

let myLibrary = [];
let myLibraryIndex = 0;

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

function displayMyLibrary() {
  myLibrary.forEach((book, i) => {
    const btnRemoveBook = document.createElement("button");
    const divBook = document.createElement("div");

    btnRemoveBook.textContent = "Remove";
    btnRemoveBook.dataset.index = i;
    btnRemoveBook.classList.add("btnRemove");

    divBook.textContent = book.info();
    divBook.dataset.index = i;
    divBook.classList.add("bookLibrary");
    divBook.appendChild(btnRemoveBook);

    library.appendChild(divBook);
  });

  let btnAllRemove = Array.from(document.querySelectorAll(".btnRemove"));
  btnAllRemove.forEach((btnRemoveItem) =>
    btnRemoveItem.addEventListener("click", (e) => {
      removeBookMyLibrary(e);
      removeBookFromLibrary(e);
    })
  );
}

function newBook() {
  formSubmitNewBook.classList.remove("submitNewBookHidden");
}

function removeBookFromLibrary(e) {
  library.removeChild(library.childNodes[e.target.dataset.index]);

  // reset btnRemove data-indexes
  resetDisplayMyLibrary();
  displayMyLibrary();
}

function removeBookMyLibrary (e) {
  myLibrary.splice(e.target.dataset.index, 1);
}

function resetDisplayMyLibrary() {
  while (library.firstChild) {
    library.removeChild(library.firstChild);
  };
}

function submitForm() {
  const name = document.querySelectorAll("input")[0].value;
  const author = document.querySelectorAll("input")[1].value;
  const pages = document.querySelectorAll("input")[2].value;
  const read = document.querySelectorAll("input")[3].value;

  addBookToLibrary(name, author, pages, read);
  resetDisplayMyLibrary(); // otherwise library will show duplicate books
  displayMyLibrary();
  formSubmitNewBook.reset();
  formSubmitNewBook.classList.add("submitNewBookHidden");
}

btnNewBook.addEventListener("click", newBook);
btnSubmit.addEventListener("click", submitForm);
