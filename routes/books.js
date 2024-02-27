const router = require('express').Router();
const passport = require('passport');

const booksCtrl = require('../controllers/books');
//router.get('/', booksCtrl.index);
router.get('/new', booksCtrl.new)
router.post('/books', booksCtrl.create);

module.exports = router;
