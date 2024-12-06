const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  const seq = Number(num);
  if (seq === 1) {
    return 1;
  } else if (seq === 0) {
    return 0;
  }
  return fibonacci(seq-1) + fibonacci(seq-2);
};

// Do not edit below this line
module.exports = fibonacci;
