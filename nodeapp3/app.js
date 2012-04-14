var app, express = require('express'), ejs = require('ejs');


app = express.createServer();

app.configure(function() {
  app.set('view options', { layout: false });
  app.set('view engine', 'ejs');
  app.use(express.static(__dirname + '/public'));
});

//mongoskin connection
var db = require('mongoskin').db('localhost:27017/local'); 



app.get('/', function(req, res) {
  res.render('index', { message: "merhaba" });
});


app.get('/m', function(req, res) {
  res.render('mindex', { message: "selam" });
});

app.get('/mm/m', function(req, res) {
  res.render('mindex', { message: "mm" });
});


//örnek db işlemi
app.get('/db', function(req, res) 
{
  
  
	// res.render('mindex', { message: "mm" });
  
	
	// db.collection('likes').find(  {"username":"serdem"}   ).toArray(function(err, result) 
	// {
	
		// if (err) throw err;
		// console.log(result[0].likes);	
		// res.send("end");
		
	// });
	
	
	
	// ------------------------------------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------------------------------------
	
	
	
	// db.collection('likes').find(  {"username":"serdem"}   ).toArray(function(err, result) 
	// {
	
		// for(var i=0; i<result.length; i++)
		// {		
			// console.log(result[i].likes);	
		// }
		
		// res.send("end");
	
	// });
	
});
	
		
	
  
  
  



app.listen(8080);
console.log('Server started on port 8080');