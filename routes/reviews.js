const router = require('express').Router();
const passport = require('passport');
router.post('/books/:id/reviews', reviewsCtrl.create)
