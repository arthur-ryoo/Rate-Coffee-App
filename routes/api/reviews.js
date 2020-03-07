const router = require('express').Router();
const reviewCtrl = require('../../controllers/reviews');

router.post('/', reviewCtrl.create);
router.get('/', reviewCtrl.index);

module.exports = router;
