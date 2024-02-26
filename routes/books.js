const router = require('express').Router();
const passport = require('passport');

const booksRouter = require('../controllers/books');
router.get('/', booksRouter);
router.get('/books/new', booksRouter)
