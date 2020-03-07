const Brand = require('../models/brand');

async function index(req, res) {
  try {
    const brands = await Brand.find({}).sort('-createdAt');
    res.json({ brands });
  } catch (error) {
    res.status(401).json({ err: 'unauthorized' });
  }
}

module.exports = {
  index
};
