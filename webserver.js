var connect = require('connect');
var serveStatic = require('serve-static');
var path = require("path");

var app = connect();
var nPort = 5100;
var sDir = ".";
app.use(serveStatic(sDir));
app.listen(nPort, function(){
    console.log("Listening on port: " + nPort);
    console.log("Directory: " + __dirname + path.sep + sDir);
});

