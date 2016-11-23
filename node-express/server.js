var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
//var http = require('http');
var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
//app.use(bodyParser.json());

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
  .all(function(req,res,next) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
  })
  .get(function(req,res,next) {
    res.end('Will send all the dishes to you');
  })
  .post(function(req,res,next) {
    res.end('Will add the dish:' + req.body.name + ' with description' + req.body.description);
  })
  .delete(function(req,res,next) {
    res.end('Deleting all dishes');
  });


// app.all('/dishes',function(req,res,next) {
//   res.writeHead(200,{'Content-Type':'text/plain'});
//   next();
// });

// app.get('/dishes',function(req,res,next) {
//   res.end('Will send all the dishes to you');
// });
dishRouter.route('/:dishId')
  .get(function(req,res,next) {
    res.end('Will send details of the dish:' + req.params.dishId + ' to you!');
  })
  .put(function(req,res,next) {
    res.end('Will update the dish ' + req.params.dishId + 'with ' + req.body.description);
  })
  .delete(function(req,res,next) {
    res.end('Deleting dish: ' + req.params.dishId);
  });


// app.get('/dishes/:dishId',function(req,res,next) {
//   res.end('Will send details of the dish:' + req.params.dishId + ' to you!');
// });

// app.put('/dishes/:dishId',function(req,res,next) {
//   res.end('Will update the dish ' + req.params.dishId + 'with ' + req.body.description);
// });

// app.post('/dishes',function(req,res,next) {
//   res.end('Will add the dish:' + req.body.name + ' with description' + req.body.description);
// });

// app.delete('/dishes', function(req,res,next) {
//   res.end('Deleting all dishes');
// });

// app.delete('/dishes/:dishId',function(req,res,next) {
//   res.end('Deleting dish: ' + req.params.dishId);
// });
app.use('/dishes',dishRouter);
app.use(express.static(__dirname + '/public'));

app.listen(port,hostname,function() {
  console.log('server running');
});

// app.use(function(req,res,next) {
//   console.log(req.headers);
//   res.writeHead(200,{'Content-Type':'text/html'});
//   res.end('<html><body><h1>Hello World</h1></body></html>');
// });

//var server = http.createServer(app);

// server.listen(port,hostname,function() {
//   console.log('server running');
// })
