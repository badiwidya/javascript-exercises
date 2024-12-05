const reverseString = function(text) {
  let textLen = text.length;
  const splittedText = text.split("");
  let resultString = "";
  while (textLen) {
    resultString += splittedText[textLen - 1];
    textLen--;
  }
  return resultString;
};

// Do not edit below this line
module.exports = reverseString;
