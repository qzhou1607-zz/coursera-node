var argv = require('yargs')
  .usage('Usage: node $0 --l=[num] --b=[num]')
  .demand(['l','b'])
  .argv;

var rect = require('./rectangle-2')

  function sovleRect(l,b) {
    rect(l,b,function(err,rectangle) {
      if(err) {
        console.log(err);
      } else {
        console.log("The area of a rectangle of dimensions length = "
                  + l + " and breadth = " + b + " is " + rectangle.area());
	    console.log("The perimeter of a rectangle of dimensions length = "
                  + l + " and breadth = " + b + " is " + rectangle.perimeter());
      }
    });
  }

sovleRect(argv.l,argv.b);
