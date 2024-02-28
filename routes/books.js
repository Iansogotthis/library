const router = require('express').Router();
const passport = require('passport');

const booksCtrl = require('../controllers/books');
//router.get('/', booksCtrl.index);
router.get('/new', booksCtrl.new)
router.get('/', booksCtrl.index);
//router.get('/search', booksCtrl.searchBooks);
router.get('/:id', booksCtrl.show);
router.post('/', booksCtrl.create);

module.exports = router;
