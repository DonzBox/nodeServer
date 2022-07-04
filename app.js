/* express 패키지를 호출하여 app 변수 객체를 만드는 로직
   만들어진 app 객체에 기능을 하나씩 연결 함, app.set으로 설정을 하나씩 세팅 */
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/* 미들웨어 연결부분 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

/* catch 404 and forward to error handler */
app.use(function (req, res, next) {
  next(createError(404));
});

/* error handler */
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

/* app 객체를 모듈로 만듦. 이렇게 만들어진 코드가 bin/www 에서 사용된 app 모듈 */
module.exports = app;

/* connection mysql */
var mysqlDB = require("./config/database");
mysqlDB.connect();
