console.log("Hello, from index. 👋👋👋👋👋👋");

export function add(a, b) {
  return a + b;
}

// common js export
// module.exports = add;

export function sub(a, b) {
  return a > b ? a - b : b - a;
}

// module.exports = { add, sub };
