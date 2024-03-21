var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var cors = require('cors');
const contextPath = '/pub';
// const cookieParser  = require("cookie-parser");

var app = express();

const router = require('./routes/index');
const authMiddleware = require('./utils/auth.util');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(contextPath, express.static(path.join(__dirname, 'public')));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     next();
//   });


app.use(cors());

app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                'script-src': ["'self'"],
            },
        },
    })
);

app.get(`${contextPath}`, (req, res) => {
    res.send('API PUB Divisi Pendidikan');
});

app.use(contextPath, router);
// app.use((req, res, next) => {
//     console.log("Header permintaan:");
//     console.log(req.headers);
//     console.log("Cookies:");
//     console.log(req.cookies);
//     next();
// });


// error handler 404
app.use((req, res, next) => {
    res.status(404).json({
        status: false,
        msg: 'Not Found',
    });
});

// error handler
app.use(function (err, req, res, next) {
    if (req.app.get('env') === 'development') {
        console.log(err.stack);
    }

    res.status(err.status || 500).json({
        status: false,
        msg: err.message,
    });
});

module.exports = app;
