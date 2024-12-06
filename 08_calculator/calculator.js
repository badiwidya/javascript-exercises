const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return (num1) - (num2);
};

const sum = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let result = 0;
  for (let num of nums) {
    result += num;
  }
  return result;
};

const multiply = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let result = 1;
  for (let num of nums) {
    result *= num;
  }
  return result;
};

const power = function(num, power) {
  let result = 1;
	while (power--) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
	if (num === 1 || num === 0) {
    return 1;
  }
  return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
