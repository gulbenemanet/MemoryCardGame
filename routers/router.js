const express = require('express');
const anasayfa = require('../controller/anasayfa');
const sekiz = require('../controller/sekiz')
const onaltı = require('../controller/onaltı')

const router = express.Router();

router.get('/', anasayfa)
router.get('/game8.html', sekiz)
router.get('/game16.html', onaltı)

module.exports = router;