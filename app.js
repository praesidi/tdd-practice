const capitalize = (string) => {
  const firstLetter = string.charAt(0).toUpperCase();
  const end = string.slice(1);
  return firstLetter + end;
};

const reverseString = (string) => {
  const newString = Array.from(string);
  let result = [];

  for (let i = 0; i <= newString.length; i++) {
    result[i] = newString[newString.length - i];
  }
  return result.join("");
};

const calculator = {
  sum(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return a / b;
  },
};

const caesarCipher = (string, factor) => {
  const newString = Array.from(string.toLowerCase());
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const result = [];

  for (let i = 0; i < newString.length; i++) {
    const letterIndex = alphabet.indexOf(newString[i]);

    if (letterIndex === -1) {
      result.push(newString[i]);
    } else if (letterIndex + factor > 25) {
      result.push(alphabet[letterIndex + factor - 26]);
    } else {
      result.push(alphabet[letterIndex + factor]);
    }
  }

  return result.join("");
};

const analyzeArray = (array) => {
  let average = array.reduce((acc, curr) => acc + curr, 0) / array.length;
  let min = array.reduce((acc, curr) => {
    return acc < curr ? acc : curr;
  });
  let max = array.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  });
  let length = array.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
};

exports.capitalize = capitalize;
exports.reverseString = reverseString;
exports.calculator = calculator;
exports.caesarCipher = caesarCipher;
exports.analyzeArray = analyzeArray;
