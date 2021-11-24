const http = require("http")

http.createServer(function (req, res) {
  res.write("amongus!!");
  res.end();
}).listen(8080);

