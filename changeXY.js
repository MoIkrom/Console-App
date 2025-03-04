function swapValues(x, y) {
  let a = x + y;
  y = a - y;
  x = a - y;

  return `X = ${x} , Y = ${y} `;
}

console.log(swapValues(7, 90));
