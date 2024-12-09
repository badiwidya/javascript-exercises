const findTheOldest = function(datas) {
  return datas.reduce((prev, current) => {
    let prevAge;
    let currentAge;
    const yearNow = new Date().getFullYear();
    if (!current.yearOfDeath) {
      currentAge = yearNow - current.yearOfBirth;
      prevAge = prev.yearOfDeath - prev.yearOfBirth;
    } else if (!prev.yearOfDeath) {
      prevAge = yearNow - prev.yearOfBirth;
      currentAge = current.yearOfDeath - current.yearOfBirth;
    } else {
      currentAge = current.yearOfDeath - current.yearOfBirth;
      prevAge = prev.yearOfDeath - prev.yearOfBirth;
    }
    return (currentAge > prevAge) ? current : prev;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
