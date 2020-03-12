const router = require('express').Router();
const reviewCtrl = require('../../controllers/reviews');

router.use(require('../../config/auth'));

router.post('/', isAuthenticated, reviewCtrl.create);
router.get('/', reviewCtrl.index);
router.delete('/:id', isAuthenticated, reviewCtrl.deleteReview);
router.put('/:id', isAuthenticated, reviewCtrl.editReview);

function isAuthenticated(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not authorized' });
}

module.exports = router;
