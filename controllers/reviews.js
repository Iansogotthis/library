const Book = require("../models/book");
module.exports = {
    create,
	delete : deleteOne
}

async function deleteOne(req, res) {
	// Note the cool "dot" syntax to query on the property of a subdoc
	const book = await Book.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id});
	console.log(book, "this is book")
	
	if (!book) return res.redirect(`/books/${book._id}`);
	book.reviews.remove(req.params.id);
	// Save the updated book
	await book.save();
	// Redirect back to the book's show view
	res.redirect(`/books/${book._id}`);
  }



  async function create(req, res){
	
	console.log('====================================')
	console.log(req.user, "< ---- req.user")
	console.log('====================================')
	try {
	
		const bookDoc = await Book.findById(req.params.id)
	
		req.body.user = req.user._id
		req.body.userName = req.user.name
		req.body.userAvatar = req.user.avatar
		
		bookDoc.reviews.push(req.body); 
		await bookDoc.save() 
		res.redirect(`/books/${req.params.id}`)
	

	} catch(err){
		console.log(err)
		res.send(err)
	}
	


}

