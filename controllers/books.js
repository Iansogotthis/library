const Book = require('./models/book'); 
module.exports={
    newBook : newBook
}

function newBook(req, res) {

    res.render("/books/new");
}

