const net = require("net");

const server = net.createServer(socket => {
    socket.write("Hello");

    socket.on("data", data => {
        console.log(data.toString());
    });
});

server.listen(8080);

// 169.254.185.124

// Putting a breakpoint means when information is sent to the server
// you can trap and stop the code at that point