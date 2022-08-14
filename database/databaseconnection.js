const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connection succesfull...");
    })
    .catch((err) => {
        console.log("Database connection unsuccesfull: " + err);
    })