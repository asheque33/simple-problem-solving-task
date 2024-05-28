// Write A Function That Counts The Number Of Vowels In A Given String.
const countVowels = (letter) => {
  let vowels = ["a", "e", "i", "o", "u"];
  const x = letter.toLowerCase().split("");

  const numberOfVowels = x.filter((ch) => vowels.includes(ch)).length;

  return `The number of vowels in the given string is ${numberOfVowels}`;
};
console.log(countVowels("Hello"));
