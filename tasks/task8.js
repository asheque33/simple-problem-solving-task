// Write A Function That Determines Whether A Given Year Is A Leap Year.
const isAYearLeapYear = (x) => {
  if (x % 4 === 0) {
    return `The given year ${x} is a leap year`;
  } else return `The given year ${x} is not a leap year`;
};
console.log(isAYearLeapYear(2026));
