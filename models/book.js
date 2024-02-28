const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  Name: {
      type: String,
      required: true
  },
  author: {
      type: String,
      required: true
  },
  isCheckedOut: {
      type: Boolean,
      default: false
  }
  //reviews: [ReviewSchema]
}, {
  timestamps: true
});
    
module.exports = mongoose.model('Book', bookSchema);
