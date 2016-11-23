var express = require('express');
var morgan = require('morgan');
var hostname = 'localhost';
var port = 3000;

var app = express();
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leadershipRouter = require('./leaderRouter');

app.use(morgan('dev'));

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leadership',leadershipRouter);
app.use(express.static(__dirname + '/public'));

app.listen(port,hostname,function() {
  console.log('server running');
});
