const palindromes = function (string) {
  const regex1 = /[a-zA-Z0-9]/;
  const regex2 = /[^a-zA-Z0-9]/g;
  let palindrome = string
    .toLowerCase()
    .split("")
    .filter((s) => {
      return s.match(regex1);
    });
  const sanitizedString = string.replace(regex2, "").toLowerCase();
  const reversedString = palindrome.reverse().join("");
  if (sanitizedString === reversedString) {
    return true;
  } else {
    return false;
  }
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
