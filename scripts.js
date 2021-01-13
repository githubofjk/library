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
  /*
  // assumes only new books, only entered one at a time
  const btnRemoveBook = document.createElement("button");
  btnRemoveBook.textContent = "Remove";
  btnRemoveBook.dataset.index = myLibraryIndex;
  btnRemoveBook.classList.add("btnRemove");
  
  const divBook = document.createElement("div");
  divBook.textContent = myLibrary[myLibraryIndex].info();
  divBook.dataset.index = myLibraryIndex;
  myLibraryIndex++;
  library.appendChild(divBook);

  divBook.appendChild(btnRemoveBook);

  let btnAllRemove = Array.from(document.querySelectorAll(".btnRemove"));
  btnAllRemove.forEach(btnRemoveItem => btnRemoveItem.addEventListener('click', removeBookFromLibrary));
*/

  myLibrary.forEach((book, i) => {
    const btnRemoveBook = document.createElement("button");
    const divBook = document.createElement("div");

    btnRemoveBook.textContent = "Remove";
    btnRemoveBook.dataset.index = i;
    btnRemoveBook.classList.add("btnRemove");

    divBook.textContent = book.info();
    divBook.dataset.index = i;
    divBook.appendChild(btnRemoveBook);

    library.appendChild(divBook);
  });

  let btnAllRemove = Array.from(document.querySelectorAll(".btnRemove"));
  btnAllRemove.forEach((btnRemoveItem) =>
    btnRemoveItem.addEventListener("click", removeBookFromLibrary)
  );
}

function newBook() {
  formSubmitNewBook.classList.remove("submitNewBookHidden");
}

function removeBookFromLibrary(e) {
  console.log(myLibrary);
  console.log(e.target);
  myLibrary.splice(e.target.dataset.index, 1);
  console.log(myLibrary);
}

function submitForm() {
  const name = document.querySelectorAll("input")[0].value;
  const author = document.querySelectorAll("input")[1].value;
  const pages = document.querySelectorAll("input")[2].value;
  const read = document.querySelectorAll("input")[3].value;

  addBookToLibrary(name, author, pages, read);
  displayMyLibrary();
  formSubmitNewBook.reset();
  formSubmitNewBook.classList.add("submitNewBookHidden");
}

btnNewBook.addEventListener("click", newBook);
btnSubmit.addEventListener("click", submitForm);
