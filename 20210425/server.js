const app = require("./app.js");
const port = 3000;

const server = app.listen(port, function () {
  console.log("Express listening on port", port);
});

const listen = require("socket.io");
const io = listen(server);
io.on("connection", (socket) => {
  // 이 아래 작성합니다
  socket.on('client send', (data) => {
    io.emit('server send', data.message);
  });

  socket.on('join', function (data) {
    io.emit('join', data.message);
  });
  socket.on('leave', function (data) {
    io.emit('leave', data.message);
  });


});
