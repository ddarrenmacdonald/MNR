var pg = require("pg")
var http = require("http")
var port = 5433;
var host = '127.0.0.1';

http.createServer(function(req, res) {
if(req.method == 'POST') {
insert_records(req,res);
}
else if(req.method == 'GET') {
list_records(req,res);
}
else if(req.method == 'PUT') {
update_record(req,res);
}
else if(req.method == 'DELETE') {
delete_record(req,res);
}
}).listen(port,host);
console.log("Connected to " + port + "   " + host);