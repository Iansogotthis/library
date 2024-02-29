const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReviewSchema = new mongoose.Schema({
  reviewText: {
    type: String,
    required: true,
  },


  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  user: {
    type: Schema.Types.ObjectId, // this is from mongoose
    ref: "User", // this references this line mongoose.model('User', userSchema);
  },
  userName: String

  
});

const bookSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    isCheckedOut: {
      type: Boolean,
      default: false,
    },
    reviews: [ReviewSchema],
  },
  
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
