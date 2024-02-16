// 1.
// n = 5 => 5! => 5 * 4 * 3 * 2 * 1
function calculateFactorial(n) {
  let calculateFactorial = 1;
  for (let i = 2; i <= n; i++) {
    calculateFactorial *= i;
  }
  return calculateFactorial;
}
console.log(calculateFactorial(5)); // 120

// 2.
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// 3. "hello" => ["h", "e", "l", "l", "o"]
function reverseString(str) {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--);
  {
    output += str.charAt(4);
  }
  return output;
}
console.log("hello"[4]);

// 4.
function countVowels(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if ((vowel += str[i]));
  }
  return counter;
}
