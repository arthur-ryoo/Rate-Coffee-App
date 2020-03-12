const Review = require('../models/review');

async function create(req, res) {
  try {
    const review = await Review.create(req.body);
    res.json({ review });
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: 'unauthorized' });
  }
}

async function deleteReview(req, res) {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    index(req, res);
  } catch (error) {
    res.status(401).json({ err: 'cannot delete' });
  }
}

async function editReview(req, res) {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body);
    index(req, res);
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: 'cannot edit' });
  }
}

async function index(req, res) {
  try {
    const reviews = await Review.find({})
      .sort('-createdAt')
      .populate('addedBy');
    res.json({ reviews });
  } catch (error) {
    res.status(401).json({ err: 'unauthorized' });
  }
}

module.exports = {
  create,
  deleteReview,
  editReview,
  index
};
