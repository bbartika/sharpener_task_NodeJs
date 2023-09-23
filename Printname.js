var http = require('http');

http.createServer(function(req,res){
    res.write("My name is Bartika");
    res.end();
}).listen(4000);
