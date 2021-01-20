var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var trackRouter = require('./routes/api/track');

var app = express();

// Connect to database
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;

db.once('open', function() {
  console.log("Database connection successful!");
  var server = app.listen(process.env.PORT || 8080, function () {
      console.log("The API is listening on " + server.address().port);
  })
});

// Failed connection
db.on('error', function() {
  console.error.bind(console, "Failed to connect to database.");
  // process.exit(1);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// Routes
app.use('/api/track', trackRouter);



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Create link to Angular build directory
app.use(express.static(__dirname + "/../dist/"));
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"/../dist/index.html"));
});

module.exports = app;
