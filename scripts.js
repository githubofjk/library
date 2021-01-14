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
}

Book.prototype.info = function () {
  return `${this.name} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function addBookToLibrary(name, author, pages, read) {
  let newBook = new Book(name, author, pages, read);
  myLibrary.push(newBook);
}

function bookReadToggle (e) {
  console.log(myLibrary[e.target.dataset.index]);

  if (myLibrary[e.target.dataset.index].read === "false") {
    myLibrary[e.target.dataset.index].read = "true";
  }
  else {
    myLibrary[e.target.dataset.index].read = "false";
  }
  
  resetDisplayMyLibrary();
  displayMyLibrary();
}

function displayMyLibrary() {
  myLibrary.forEach((book, i) => {
    const btnRead = document.createElement("button");
    const btnRemoveBook = document.createElement("button");
    const divBook = document.createElement("div");

    btnRead.textContent = "Read Toggle";
    btnRead.dataset.index = i;
    btnRead.classList.add("btnRead");

    btnRemoveBook.textContent = "Remove";
    btnRemoveBook.dataset.index = i;
    btnRemoveBook.classList.add("btnRemove");

    divBook.textContent = book.info();
    divBook.dataset.index = i;
    divBook.classList.add("bookLibrary");

    divBook.appendChild(btnRemoveBook);
    divBook.appendChild(btnRead);

    library.appendChild(divBook);
  });

  let btnRead = Array.from(document.querySelectorAll(".btnRead"));
  btnRead.forEach((btnReadItem) =>
    btnReadItem.addEventListener("click", bookReadToggle)
  );

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
  library.textContent = "Library";
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
