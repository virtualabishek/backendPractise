import http from "http";

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/books":
      res.writeHead(200);
      res.end("book page is working!!!");
      break;
    case "/projects":
      res.writeHead(200);
      res.end("projects page is working!!!");
      break;
    case "/others":
      res.writeHead(200);
      res.end("Other page is working!!!");
      break;
    default:
      res.writeHead(200);
      res.end("Sorry man! Page can't found, but your backend is working...");
      break;
  }
  console.log(req.method);
});

server.listen(8000, () => {
  console.log("Server is running well.");
});
