const Book = require('../models/book'); 

module.exports={
    new: newBook,
    create
    
}

function create (req, res){
    const { Name, author } = req.body;
    const isCheckedOut = req.body.isCheckedOut === 'on';

    const newBook = new Book({
        Name,
        author,
        isCheckedOut
    });

    newBook.save((err) => {
        if (err) {
            console.error('Error creating book:', err);
            res.status(500).send('Error creating book');
        } else {
            console.log('Book created successfully');
            res.redirect('/index');
        }
    });
}
function newBook(req, res) {

    res.render("books/new");
}

