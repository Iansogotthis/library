const router = require('express').Router();
const passport = require('passport');
const reviewsCtrl = require('../controllers/reviews');
router.post('/books/:id/reviews', reviewsCtrl.create)
router.delete('/books/:bookId/reviews/:reviewId', reviewsCtrl.delete)
router.get('/reviews/:id/edit', reviewsCtrl.edit)

module.exports = router
