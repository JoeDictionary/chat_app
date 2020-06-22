let express = require('express');
let socket = require('socket.io');

// App setup
let app = express();
let server = app.listen(4000, () => {
  console.log('Listening to requests on port 4000');
});

// Static files
app.use(express.static('public'));

// Socket setup
let io = socket(server);

io.on('connection', (socket) => {
  console.log('Made Socket connection; socket id:', socket.id);

  socket.on('chat', (message) => {
    io.sockets.emit('chat', message);
    console.log('Relayed to all sockets');
  });
});
