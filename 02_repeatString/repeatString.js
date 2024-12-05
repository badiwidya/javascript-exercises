const repeatString = function(text, num) {
  let stringResult = "";
  if (num < 0) return "ERROR";
  while (num--) {
    stringResult += text;
  }
  return stringResult;
};

// Do not edit below this line
module.exports = repeatString;
