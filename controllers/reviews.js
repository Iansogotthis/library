const Book = require("../models/book");
module.exports = {
    create,
	delete : deleteOne
}

async function deleteOne(req, res) {
	try {
	  const { bookId, reviewId } = req.params;
	  const book = await Book.findById(bookId);
	  book.reviews.id(reviewId).remove();
	  await book.save();
	  res.redirect(`/books/${bookId}`);
	} catch (err) {
	  console.error(err);
	  res.send(err);
	}
  };
  
async function create(req, res){
	// To find the movie!
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

