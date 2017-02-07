var express = require('express');
var app = express();

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = process.env.MONGOLAB_URI;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');

  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log("Unable to connect to the mongoDB server. Error:", err);
    }
    else {
      console.log("Connection established to ", url);

      //do stuff

      db.close();
    }
  });
});

app.listen(app.get('port'), function(){
  console.log('Node app is running on port ', app.get('port'));
});
