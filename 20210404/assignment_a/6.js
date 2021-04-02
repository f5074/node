// node 6.js 로 실행한다.

// http://localhost:3000 으로 접속하면
// root url 이 화면에 나타나야 한다.

// http://localhost:3000/admin/products 으로 접속하면
// admin url 이 화면에 나타나야 된다

const express = require("express");

// 이 아래로 작성해주세요.
var app = express();
const port = 3000;


function getUrl(req) {
  var url = req.protocol + "://" + req.headers.host + req.url;
  return url;
}

app.get('/', function (req, res) {
  res.send(getUrl(req));
});

app.get('/admin/products', function (req, res) {
  res.send(getUrl(req));
});

app.listen(port, function () {
  console.log("Express listening on port", port);
});
