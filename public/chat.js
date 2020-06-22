// let socket = io.connect('http://localhost:4000');
let socket = io(); // Default-connects to host that serves the page

// Query DOM
let message = document.getElementById('message'),
  handle = document.getElementById('handle'),
  btn = document.getElementById('send'),
  output = document.getElementById('output');

// Emit events
btn.addEventListener('click', () => {
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	})
});

// Listen for events
socket.on('chat', (message) => {
	output.innerHTML += '<p><strong>' + message.handle + ': </strong>' + message.message + '</p>'
})
