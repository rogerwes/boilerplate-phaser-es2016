var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host);
    console.log('Example app listening at http://%s:%s', host, port);
});

app.use(function (req, res, next) {
    console.log('cant get something');
    res.status(404).send('Sorry cant find that!');
});