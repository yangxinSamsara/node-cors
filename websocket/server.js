const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8888 });
server.on("connection", function (socket) {
  socket.on("message", function (data) {
    console.log(data, 'from client')
      socket.send('xiao lao di')
  });
});
