var app, express = require('express'), ejs = require('ejs');


app = express.createServer();

app.configure(function() {
  app.set('view options', { layout: false });
  app.set('view engine', 'ejs');
  app.use(express.static(__dirname + '/public'));
});



app.get('/', function(req, res) {
  res.render('index', { message: "merhaba" });
});


app.get('/m', function(req, res) {
  res.render('mindex', { message: "selam" });
});

app.get('/mm/m', function(req, res) {
  res.render('mindex', { message: "mm" });
});




app.listen(8080);
console.log('Server started on port 8080');