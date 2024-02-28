const Book = require('../models/book'); 

module.exports={
    new: newBook,
    create,
    searchBooks
    
}
function searchBooks(req, res) {
    const name = req.query.name;

    Book.find({ Name: name }, (err, books) => {
        if (err) {
            console.error('Error searching for book:', err);
            res.status(500).send('Error searching for book');
        } else {
            res.render('searchResults', { books: books });
        }
    });
}

async function create(req, res) {
	// convert nowShowing's checkbox of nothing or "on" to boolean
	req.body.nowShowing = !!req.body.nowShowing;
	// remove any whitespace at start and end of cast
  
  
	// Remove empty properties so that defaults will be applied
	for (let key in req.body) {
	  if (req.body[key] === "") delete req.body[key];
	}
	try {
	  const bookFromTheDatabase = await Book.create(req.body); // the await is waiting for the MovieModel to go to MongoDB ATLAS (our db) a
	  //and put the contents form in the db, and come back to the express server
  
	  // if you want to see what you put in the database on your server
	  console.log(bookFromTheDatabase);
  
	  // Always redirect after CUDing data
	  // We'll refactor to redirect to the movies index after we implement it
	  res.redirect(`/books/${bookFromTheDatabase._id}`); // Update this line
	} catch (err) {
	  // Typically some sort of validation error
	  console.log(err);
	  res.render("books/new", { errorMsg: err.message });
	}
  }
  


function newBook(req, res) {

    res.render("books/new");
}

