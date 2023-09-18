const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const home = require('./src/routes/home');

// 앱 세팅
app.set('views', "./src/views");
app.set('view engine', 'ejs');
// 미들웨어
app.use(express.static(`${__dirname}/src/public`))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/', home);

module.exports = app;