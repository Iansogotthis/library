const Book = require("../models/book");
module.exports = {
    create,
	delete : deleteOne,
	edit,
	update
}
async function update(req, res) {
	const book = await Book.findOne({'reviews._id': req.params.reviewId});
	console.log(book)
	const review = book.reviews.id(req.params.reviewId);
	console.log(req.body)
	review.reviewText = req.body.reviewText;
	review.rating = req.body.rating;
	try {
	  await book.save();
	} catch (e) {
	  console.log(e.message);
	}
	// Redirect back to the book's show view
	res.redirect(`/books/${book._id}`);
  }

async function edit(req, res) {
	console.log(req.params, "this is req.params.id")
	
	const book = await Book.findOne({'reviews._id': req.params.reviewId});
	console.log(book)
	const review = book.reviews.id(req.params.reviewId);
	console.log(review)
	res.render('books/reviewEdit', { review });
  }

async function deleteOne(req, res) {
	const book = await Book.findOne({'reviews._id': req.params.reviewId, 'reviews.user': req.user._id});
	
	if (!book) return res.redirect(`/books/${book._id}`);
	book.reviews.remove(req.params.reviewId);
	
	await book.save();


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

