const removeFromArray = function(arr, ...rem) {
  arr = arr.filter(item => !rem.includes(item));

  //! another way
  /* let newArr = [];
  arr.forEach((item) => {
    if (!rem.includes(item)) {
      newArr.push(item);
    }
  }) */
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
