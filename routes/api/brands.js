const router = require('express').Router();
const brandCtrl = require('../../controllers/brands');

router.post('/', brandCtrl.create);
router.get('/', brandCtrl.index);
router.get('/recent', brandCtrl.getRecentlyAdded);

module.exports = router;
