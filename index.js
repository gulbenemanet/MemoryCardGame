const express = require('express');
const app = express();
const router = require('./routers/router');
const path = require('path')

const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')))



app.use('/', router);

app.listen(process.env.PORT || 3000)


//some css problems like animasyonlar responsive olmaması tekrar oynama ile ana sayfaya yönlendir ekrana çıkacak bi uyarı olabilir