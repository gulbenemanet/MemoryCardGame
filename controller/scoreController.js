const Modal = require('../models/gamerModels');
const { model } = require('mongoose');
// const isim = document.getElementById('myForm')

const isim = require('../public/score')
const ekleme = (req, res) => {
    const eklenecek = new Modal(req.isim)
    const sonuc = eklenecek.save();
    res.render('game')
    console.log("ekleme yapıldı");
}

const view = (req, res) => {
    Modal.find()
        .then((son) => {
            res.json({
                son
            })
        })
        .catch(err => console.log(err))
}

module.exports = {
    ekleme,
    view
}