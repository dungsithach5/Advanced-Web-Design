// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end('Hello World!!!!!!!');
// }).listen(8080);

// var fs = require('fs');
// console.log(fs);

// Đọc, ghi file
// fs.readFile('pathFile',[option],function(err,data){

// })


var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead('200',{'Content-Type':'text/html'});
    fs.readFile('../readfile/docfilehtml.html','utf8',function(err,data) {
        if (err) throw err;
        res.write(data);
        res.end();
    })
}).listen(8080);

    
