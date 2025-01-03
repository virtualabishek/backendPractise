import * as fs from "fs/promises";

await fs.writeFile("hello.txt", "Thank you, for learning node.js!!!");

console.log("Hello! From a file.");
try {
  const value = await fs.readFile("hello.txt", "utf8");
  console.log(value);
} catch (err) {
  console.log(err);
}
//

await fs.unlink("a.txt");

await fs.rmdir("deleteMe");

fs.writeFile;
