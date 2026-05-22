export function capitalize(string) {
  return string
    .split(" ")
    .map((char) => {
      return char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
    })
    .join(" ");
}

// console.log(capitalize("kinth"));

export function reverseString(string) {
  return string.split("").reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

export function analyzeArray(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  const length = array.length;
  const average = array.reduce((a, b) => a + b, 0) / length;
  return {
    average,
    min,
    max,
    length,
  };
}

export function caesarCipher(string, num) {
  const shift = num % 26;
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const uppercase = letters.map((char) => char.toUpperCase());
  const combined = [...letters.slice(shift), ...letters.slice(0, shift)];

  const result = string
    .split(" ")
    .map((word) => {
      const partialResult = word
        .split("") // if words are two or more split into a array
        //check for lettercase and punctuations
        .map((char) => {
          if (uppercase.includes(char)) {
            const index = uppercase.indexOf(char);
            return combined[index].toUpperCase();
          } else if (letters.includes(char)) {
            const index = letters.indexOf(char);
            return combined[index];
          } else {
            return char;
          }
        })
        .join("");

      return partialResult;
    })
    .join(" ");

  return result;
}
