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

    // express is changing the ejs into html and sending it to the browser (client side/frontend)
    res.render("books/show", {
      book: bookFromTheDatabase, // the key movie, becomes a variable name in the show.ejs
      //reviews: reviews?
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}
// function update  (req, res) {
//     const bookId = req.params.id;
//     const isCheckedOut = req.body.isCheckedOut === 'true';

//     Book.findById(bookId, (err, book) => {
//         if (err) {
//             console.log(err);
//             res.redirect('/books');
//         } else {
//             book.isCheckedOut = isCheckedOut;
//             book.save((err, updatedBook) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     res.redirect('/books');
//                 }
//             });
//         }
//     });
// };

async function index(req, res) {
  try {
    const booksFromTheDB = await Book.find({});
    console.log(booksFromTheDB);
    // then we want to send a ejs page with all the movies to the browser
    // movies/index is looking in the views folder for the ejs page
    res.render("books/index", { bookDocs: booksFromTheDB });
    // movieDocs is now a variables inside of views/movies/index.ejs
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
  // convert nowShowing's checkbox of nothing or "on" to boolean

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
    res.redirect(`/books`); // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render("books/new", { errorMsg: err.message });
  }
}

function newBook(req, res) {
  res.render("books/new");
}
