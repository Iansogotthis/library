const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	
	Name: {
	  type: String,
	  required: true
	},
	author:{
        type: String,
        required: true
    },
    isCheckedOut:    {
        type: Boolean,
        default: false
    }}, {
        timestamps: true
      });
    
    
module.exports = mongoose.model('Book', bookSchema);
