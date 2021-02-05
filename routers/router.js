const express = require('express');
const anasayfa = require('../controller/anasayfa');
const sekiz = require('../controller/sekiz')
const onaltı = require('../controller/onaltı')
const score = require('../controller/scoreController')

const router = express.Router();

router.get('/', anasayfa)
router.get('/game8.html', sekiz)
router.get('/game16.html', onaltı)
router.get('/view', score.view)
router.post('/add', score.ekleme)

module.exports = router;