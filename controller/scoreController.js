const Model = require('../models/gamerModels');

const ekleme = (req, res) => {
    const eklenecek = new Model({ isim: req.body.isim, note: req.body.note })
    console.log(req.body);
    const sonuc = eklenecek.save();
    res.render('game')
    console.log("ekleme yapıldı");
    //console.log(req);
}

const view = (req, res) => {
    Model.find({})
        .then((son) => {
            res.json(son)
        })
        .catch(err => console.log(err))
}

module.exports = {
    ekleme,
    view,
}