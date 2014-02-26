var connect = require('connect');

app = connect()
  .use(connect.static('public'))
  .use(function( req, res) {
    if(req.url === '/airports') {
      myAirport.find({}, function (error, airports) {
        //console.log("Airports found: " + airports);
        res.end(JSON.stringify(airports));
      })
    }
		else
      res.end("Couldn't find it...");
  })
  .listen(3000);
  console.log('listening on 3000');






var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SteveAir');;

var db = mongoose.connection;
var myAirport = mongoose.model('Airport', {
	code: String,
	name: String,
	city: String,
	destinations: Array
})


// var repl = require('repl');
// var prompt = repl.start({prompt: 'flights>'});
// prompt.context.data = airports;
















// var mongojs     = require('mongojs');
// var db          = mongojs('SteveAir');
// db.collection('airports').find(function(err, airports) {
//     // docs is an array of all the documents in mycollection
// 		console.log(airports[0]);	
// });
//db.collection('airports').save({"code" : "ATL", "name" : "Atlanta International Airport", "city" : "Alanta", "destinations" : [ "ATL", "PHX" ]});

// var express     = require('express');
// var app         = module.exports.app = express();
// var databaseUrl = "SteveAir";
// var collections = ["airports"];
// var db          = require('mongojs').connect(databaseUrl);
// 
// app.configure(function () {
// 	app.use(express.favicon());
// 	app.use(express.bodyParser());
// 	app.use(express.logger('dev'));  //tiny, short, default
// 	app.use(app.router);
// 	app.use(express.static(__dirname + '/app'));
// 	app.use(express.errorHandler({dumpExceptions: true, showStack: true, showMessage: true}));
// });
// 
// 
// // Setup Database ---------------------------------------------------------------------------
// 
// //To allow use ObjectId or other any type of _id
// var objectId = function (_id) {
//     if (_id.length === 24 && parseInt(db.ObjectId(_id).getTimestamp().toISOString().slice(0,4), 10) >= 2010) {
//         return db.ObjectId(_id);
//     } 
//     return _id;
// }
// 
// //----------------------------------------------------------
// //Function callback
// var fn = function (req, res) {
//     res.contentType('application/json');
//     var fn = function (err, doc) { 
//     //console.log('asdasdas',req.body ,err,doc)
//         if (err) { 
//             if (err.message) {
//                 doc = {error : err.message} 
//             } else {
//                 doc = {error : JSON.stringify(err)} 
//             }
//         }
//         if (typeof doc === "number" || req.params.cmd === "distinct") { doc = {ok : doc}; } 
//         res.send(doc); 
//     };
//     return fn;
// };
// 
// 
// /* Routes */
// 
// //----------------------------------------------------------
// // Query
// 
// app.get('/api/:collection', function(req, res) { 
// 	var item, sort = {}, qw = {};
// 	for (item in req.query) {
// 		req.query[item] = (typeof +req.query[item] === 'number' && isFinite(req.query[item])) 
// 			? parseFloat(req.query[item],10) 
// 				: req.query[item];
// 				
// 		if (item != 'limit' 
// 			&& item != 'skip' 
// 			&& item != 'sort' 
// 			&& item != 'order' 
// 			&& req.query[item] != "undefined" 
// 			&& req.query[item]){
// 				qw[item] = req.query[item]; 
// 		}//if
// 	}//for
// 	  
// 	if (req.query.sort){ 
// 		sort[req.query.sort] = (req.query.order === 'desc' || req.query.order === -1) ? -1 : 1; 
// 	}//if
// 
// 	db.collection(req.params.collection)
// 		.find(qw)
// 		.sort(sort)
// 		.skip(req.query.skip)
// 		.limit(req.query.limit)
// 		.toArray(fn(req, res))
// });
// 
// //----------------------------------------------------------
// 
// 
// 
// 
// 
// 
// // ------------------------------------------------------------------------------------------
// 
// 
// app.listen(3000);
// 
// console.log('listening on 3000');
// 
// 
