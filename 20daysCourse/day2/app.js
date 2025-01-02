import { fileURLToPath } from "url";
import { dirname } from "path";

console.log("Hello! From App. 👋");

//import on common JS
// const { add, sub } = require("./index");

import { add, sub } from "./index.js";

console.log(add(1, 2));

console.log(sub(4, 9));

// now use ES6 Modules

// for es6 use, use .mjs for a file extension

// modular stands for mjs

// sidhai package.json ma: "type": "module" use gareni vayo

// console.log(__filename);

console.log(import.meta.url);

console.log(fileURLToPath(import.meta.url));
console.log(dirname(fileURLToPath(import.meta.url)));

// es6 are asynchronous where as common js are synchronous
