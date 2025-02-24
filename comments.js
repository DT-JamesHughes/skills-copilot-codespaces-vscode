// Create web server
var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
    // Open file
    fs.readFile('index.html', 'utf8', function(err, data) {
        // Write response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
// Open browser and go to http://localhost:8080
// You should see the content of index.html