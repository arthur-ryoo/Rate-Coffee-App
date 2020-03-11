const router = require('express').Router();
const brandCtrl = require('../../controllers/brands');

router.get('/recent', brandCtrl.getRecentlyAdded);

router.use(require('../../config/auth'));

router.post('/', isAuthenticated, brandCtrl.create);
router.get('/', isAuthenticated, brandCtrl.index);

function isAuthenticated(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not authorized' });
}

module.exports = router;
