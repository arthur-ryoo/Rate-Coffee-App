const router = require('express').Router();
const detailCtrl = require('../../controllerss');

router.get('/', detailCtrl.index);

module.exports = router;
