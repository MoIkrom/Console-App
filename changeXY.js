const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function swapValues(x, y) {
  let a = x + y;
  y = a - y;
  x = a - y;
  return `X = ${x}, Y = ${y}`;
}

rl.question("Masukkan nilai X: ", (x) => {
  rl.question("Masukkan nilai Y: ", (y) => {
    const result = swapValues(parseInt(x), parseInt(y));
    console.log(result);
    rl.close();
  });
});
