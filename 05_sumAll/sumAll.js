const sumAll = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }
  if (a < 0 || b < 0) {
    return "ERROR";
  }
  const startPoint = (a < b) ? a : b;
  const endPoint = (a < b) ? b : a;
  let sum = 0;
  for (let i = startPoint; i <= endPoint; i++) {
    sum += i;
  }
  return sum;
};


// Do not edit below this line
module.exports = sumAll;
