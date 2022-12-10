var StaticServer = require("static-server");
var server = new StaticServer({
  rootPath: ".",
  port: 1337,
  name: "server",
  cors: "*",
  templates: {
    index: "index.html",
  },
});

server.start(function () {
  console.log("Server listening to", server.port);
});
