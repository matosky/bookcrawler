"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const homeRouter = require('./routes/home');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();
// view engine setup
const url = "";
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../src/public')));
app.use("/", homeRouter);
app.use('/books', indexRouter);
app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    // res.status(err.status || 500);
    res.render('error');
});
// const PORT = process.env.PORT || 8080;
app.listen(8080, () => {
    console.log("listening for request at port ", 8080);
});
module.exports = app;
//# sourceMappingURL=app.js.map