var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv')
const cors = require('cors');

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var mongooseRouter = require('./routes/mongoose')
dotenv.config()

var app = express();

// MONGOOSE
require("./configs/mongooseConfig");
//cors

const corsOptions = {
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    preflightContinue: false,
}
app.use(cors(corsOptions))



  
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', require('./routes/authRoute'))
app.use('/users', usersRouter);
app.use('/mongoose', mongooseRouter);

module.exports = app;
