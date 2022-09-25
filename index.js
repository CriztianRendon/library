//DATA 
let myLibrary = [];

function book (title, autor, pages, read) {
        this.title = title;
        this.autor = autor;
        this.pages = pages;
        this.read = read;

        //CAMBIO DE ESTADO READ
        this.toggleReadStatus = () => {
            this.read = !this.read;
        }
};

//ADD A BOOK TO MY LIBRARY

function addBookToLibrary() {

    let title = document.getElementById('title').value;
    let autor = document.getElementById('autor').value;
    let pages = parseInt(document.getElementById('pages').value);
    let read = document.getElementById('isRead').checked;

    let newBook = new book(title, autor, pages, read);    

    myLibrary.push(newBook);
    document.getElementById('formNewBook').reset()
};

function createBookCards(library){

    let bookList = document.getElementById('booksList');
    bookList.innerHTML = ``;

    library.forEach( (book, indexBook) => {
        let isReadbtn = book.read? `btn-success` : `btn-secondary`;
        let isReadStatus = book.read? `Read` : `No read`;

        bookList.innerHTML += `
        <div class="col-12 col-lg-6"
            <div class="row">
                <div class="card m-3">
                    <div class="card-body">
                        <h2>Titulo: ${book.title} </h2>
                        <p>Autor: ${book.autor}</p>
                        <p>pages: ${book.pages}</p>
                        <button id="toggleReadBtn" "type="button" class="btn ${isReadbtn}" onclick="changeReadStatus(${indexBook})">${isReadStatus}</button>
                        <button id ="deleteBtn" type="button" class="btn btn-danger" onclick="deleteBook('${indexBook}')">Delete</button>
                    </div>
                </div>
            </div>
        </div>`;    
    });
};

document.getElementById('formNewBook').addEventListener('submit', addBookToLibraryUI);

//ADD A BOOK TO MY LIBRARY
function addBookToLibraryUI(e) {
    e.preventDefault();
    addBookToLibrary();
    createBookCards(myLibrary); 
};

//TOGGLE READ STATUS
function changeReadStatus(indexBook){
    myLibrary[indexBook].toggleReadStatus();
    createBookCards(myLibrary);
};

//DELETE A BOOK TO MY LIBRARY
function deleteBook(indexBook){
    myLibrary.splice(indexBook, 1);
    createBookCards(myLibrary);
};
