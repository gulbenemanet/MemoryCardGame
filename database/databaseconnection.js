const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/score', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("db bağlannıldı...");
    })
    .catch((err) => {
        console.log("db bağlantı hatası...");
    })