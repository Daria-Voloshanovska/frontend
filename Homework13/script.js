const form = document.getElementById('book-form');
const bookList = document.getElementById('book-list');
const clearBtn = document. getElementById('clear-list');

let books = [
    { author: 'Joanne Rowling', title: 'Harry Potter'}
];

function clearBookList() {
    while (bookList.hasChildNodes()) {
        bookList.firstChild.remove();
    }
}

function createBookList(){
    const booksElements = books.map(book =>{
        const li = document.createElement('li');
        li.innerText = `${book.title} от ${book.author}`;
        return li;
    });

    bookList.append(...booksElements);
}

createBookList();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = form.title.value.trim();
    const author = form.author.value.trim();

    const check = books.find(book => 
        book.title.toLowerCase() === title.toLowerCase() && 
        book.author.toLowerCase() === author.toLowerCase()
    );
    
    if(check) {
        alert('Эта книга уже в списке!')
        } else{
            const book = {title, author};
            books.push(book);
            createBookList();
            form.title.value = '';
            form.author.value = '';
        }
});
    clearBtn.addEventListener('click', () =>{
        books.length = 0;
        clearBookList();
    });

