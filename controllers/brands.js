const Brand = require('../models/brand');

async function getRecentlyAdded(req, res) {
  try {
    const recentlyAddedBrands = await Brand.find({})
      .sort('-createdAt')
      .limit(5);
    res.json({ recentlyAddedBrands });
  } catch (error) {
    res.status(400).json({ err: 'bad request' });
  }
}

async function create(req, res) {
  try {
    const brand = await Brand.create(req.body);
    res.json({ brand });
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: 'unauthorized' });
  }
}

async function index(req, res) {
  try {
    const brands = await Brand.find({}).sort('-createdAt');
    res.json({ brands });
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: 'unauthorized' });
  }
}

module.exports = {
  create,
  index,
  getRecentlyAdded
};
