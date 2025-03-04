function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(i - 1);
    let numbers = String(i).repeat(n - i + 1);
    console.log(spaces + numbers);
  }
}


triangle(7)