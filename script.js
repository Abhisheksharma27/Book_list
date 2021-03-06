const bookList = document.querySelector('#book-list');

function Book(title, author, isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}
//UI contructor

function UI(){

}
//Function add book to list

UI.prototype.addBookToList = function(book){

    const list = document.getElementById('book-list');
     
    //creating a row  element
    const row = document.createElement('tr');

    //insert cols

    row.innerHTML = ` 
                     <td> ${book.title}</td>
                     <td> ${book.author}</td>
                     <td> ${book.isbn}</td>
                     <td> <a href = "#" class = "delete">X</a></td>`;
                     list.appendChild(row);
}

//prototype for show alert

UI.prototype.showAlert = function(message, className){

    const div = document.createElement('div');
    
    div.className = `alert ${className}`;

    //adding text

    div.appendChild(document.createTextNode(message));

    //Get parent

    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form');
    const h1 = document.getElementById('h1');

    //adding a div node with text before form in a container

    container.insertBefore(div, h1);

    //diappear

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 1000)
};


UI.prototype.deleteBook = function(target){

    if(target.className === 'delete'){
        console.log(123);
        target.parentElement.parentElement.remove();

       
    }

}

UI.prototype.clearFields = function(){
 document.getElementById('title').value = "";
 document.getElementById('author').value = "";
 document.getElementById('isbn').value = "";

}
//Event listeners

document.querySelector('.book-form').addEventListener('submit', function(e){

    //get form values

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //instantiating a book
const book = new Book(title, author, isbn);

    //uI instantiate

    const ui = new UI();
    //validation
 if(title === '' || author === '' || isbn === ""){
       //error alert
        ui.showAlert('Please fill in the required fields.', 'error');

    }
     else {
         //adding a book to the list
            ui.showAlert('Book Added!', 'success');
            ui.addBookToList(book);
            ui.clearFields();
    }
    e.preventDefault();
})

document.querySelector('#book-list').addEventListener('click', function(e){
    
    const ui = new UI();
    
    ui.deleteBook(e.target);

    ui.showAlert('Book Removed', 'success');
    
    
    
    e.preventDefault();
})