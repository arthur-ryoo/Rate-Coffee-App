const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    taste: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },

    comment: {
      type: String,
      required: true
    },

    addedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    brandId: {
      type: Schema.Types.ObjectId,
      ref: 'Brand'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', reviewSchema);
