var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session =require('express-session');
var logger = require('morgan');
const mode = process.env.NODE_ENV || "development";
var middleware=require('./Middleware/test.middleware')
var env=require('dotenv').config({path:`.env.${mode}`});
var app = express();
var store=new session.MemoryStore();
app.use(session({secret:"sdsdsdsdsdds",store:store,saveUninitialized:false,resave:true}));
app.use(function(req,res,next){
  
  if(req.path!='/signUp'){
    store.get(req.query['sessionId'],function(err,data){
      console.log('herer')
              console.log(err,data);
    })
  }
  next()
       

})
const router = express.Router()

 var allowCrossDomain = function(req, res, next) {
  
  var allowedOrigins = [];
  var origin = req.headers.origin;
  
  if (allowedOrigins.indexOf(origin) > -1) {
      res.setHeader('Access-Control-Allow-Origin', origin);
  }
 
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Content-Type, auth-token,Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
      res.send(200);
  }
  else {
      next();
  }
};
app.use(allowCrossDomain);
//app.use(middleware.checkToken);

var mongo=require('./DbConnection');//Database connection 
// var elasticClient=require('./DbConnection/elasticConnection');//Database connection 
// elasticClient.cluster.health({},function(err,resp,status) {
//   console.log("=====================================");
//   console.log("Elastic Connection Info");
//   console.log("=====================================");
//   console.log("-- Client Health --",resp);
//   console.log("=====================================");
// });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/node_modules'));
require('./routes')(app);
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
