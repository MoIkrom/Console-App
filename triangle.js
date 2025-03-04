const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(i - 1);
    let numbers = String(i).repeat(n - i + 1);
    console.log(spaces + numbers);
  }
}

rl.question("Masukkan angka : ", (y) => {
  triangle(parseInt(y));  
  rl.close();
});
