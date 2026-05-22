import {
  calculator,
  capitalize,
  reverseString,
  analyzeArray,
  caesarCipher,
} from "./code.js";

describe("capitalize", () => {
  test("capitalize", () => {
    expect(capitalize("kinth")).toBe("Kinth");
  });
  test("capitalize two or more words", () => {
    expect(capitalize("kinth enrique")).toBe("Kinth Enrique");
  });
  test("capitalize uppercase word to capitalize", () => {
    expect(capitalize("KINTH")).toBe("Kinth");
  });
  test("capitalize uppercase two or more words", () => {
    expect(capitalize("kinth enrique")).toBe("Kinth Enrique");
  });
});

expect(capitalize("KINTH ENRIQUE")).toBe("Kinth Enrique");
test("reverseString", () => {
  expect(reverseString("dracula")).toBe("alucard");
});

test("calculator", () => {
  expect(calculator.add(2, 2)).toEqual(4);
  expect(calculator.subtract(2, 1)).toEqual(1);
  expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
  expect(calculator.multiply(5, 5)).toEqual(25);
});

describe("caesarCipher", () => {
  test("my name(shift 3)", () => {
    expect(caesarCipher("nlqwk", -3)).toBe("kinth");
  });
  test("shift 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("caesarCipher original lettercase", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("caesarCipher with space", () => {
    expect(caesarCipher("kinth enrique", 3)).toBe("nlqwk hqultxh");
  });
  test("caesarCipher original lettercase and punctuations (example 1)", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("caesarCipher original lettercase and punctuations(example 2)", () => {
    expect(caesarCipher("nlQ!k hqultxh", -3)).toBe("kiN!h enrique");
  });
  test("shift 300", () => {
    expect(caesarCipher("Hello, World!", 300)).toBe("Vszzc, Kcfzr!");
  });
});

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
