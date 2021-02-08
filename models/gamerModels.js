const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GamerSchema = new Schema({
    isim: {
        type: String,
        //required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    note: {
        type: String,
    },
    puan: {
        type: Number,
        trim: true
    }
}, { collection: 'scoreTable' })

const Gamer = mongoose.model('Gamer', GamerSchema)

module.exports = Gamer;