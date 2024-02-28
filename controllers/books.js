const Book = require("../models/book");

module.exports = {
  new: newBook,
  create,
  searchBooks,
  index,
  show,
};
async function show(req, res) {
  try {
    const bookFromTheDatabase = await Book.findById(req.params.id)
	
    //.exec();

    console.log(bookFromTheDatabase);

    res.render("books/show", {
      book: bookFromTheDatabase, 
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}
// function update  (req, res) {
//     const bookId = req.params.id;
//     const isCheckedOut = req.body.isCheckedOut === 'true';


// };

async function index(req, res) {
  try {
    const booksFromTheDB = await Book.find({});
    console.log(booksFromTheDB);
    
    res.render("books/index", { bookDocs: booksFromTheDB });
    
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
}

function searchBooks(req, res) {
  const name = req.query.name;

  Book.find({ Name: name });
  res.redirect("/books");
}

async function create(req, res) {

  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    const bookFromTheDatabase = await Book.create(req.body);
    console.log(bookFromTheDatabase);

  
    res.redirect(`/books`); 
  } catch (err) {

    console.log(err);
    res.render("books/new", { errorMsg: err.message });
  }
}

function newBook(req, res) {
  res.render("books/new");
}
