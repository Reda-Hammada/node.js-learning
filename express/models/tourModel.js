const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
  },
  price: {
    type: Number,
    required: [true, "a Tour must have a price"],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;

