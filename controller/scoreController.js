const Modal = require('../models/gamerModels');

const ekleme = (req, res) => {
    const eklenecek = new Modal({ isim: req.body.isim, note: req.body.note })
    const sonuc = eklenecek.save();
    res.render('game')
    console.log("ekleme yapıldı");
    console.log(req.body);
}

const view = (req, res) => {
    Modal.find()
        .then((son) => {
            //res.json(son)
            //res.render('game', son)
            res.render('game', {
                son: son
            })
        })
        .catch(err => console.log(err))
}

module.exports = {
    ekleme,
    view,
}