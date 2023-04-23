const jsonServer = require('index.js');
const server = jsonServer.create();
const router = jsonServer.router("./data.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
const PORT = process.env.SERVER_PORT || 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
server.listen(PORT, () => {
  console.log("Server is running");
});