import http from "http";

import chalk from "chalk";

const server = http.createServer((req, res) => {
  if (req.url === "/books") {
    res.writeHead(200);
    res.end("Book Page is working");
  } else if (req.url === "/others") {
    res.writeHead(200);
    res.end("Others is working.");
  } else {
    res.writeHead(200);
    res.end("Backend is on working mode.");
  }
  console.log(res);
  // do tomorrow this using switch case.
});

server.listen(8000, () => {
  console.log("Server started succesfully!!!!");
});

console.log(chalk.bgCyan("Hello There. How are you?"));
