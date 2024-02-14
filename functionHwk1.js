function add(a, b) {
  return a + b;
}

const sum = add(3, 4);
console.log(sum);

/////////////////////////

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  }
}
const output = divide(4, 2);
console.log(output);

///////////////////////////

function convert(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

///////////////////////////////////

function divisibleBy55(number) {
  return number % 55 === 0;
}
console.log(divisibleBy55(110)); // true
console.log(divisibleBy55(70)); // false

//////////////////////////////////////

function checkLength(string) {
  return string.length;
}
console.log(checkLength(homework));

/////////////////////////////////////

function concat(string1, string2) {
  return string1 + string2;
}
const result = contact("cat", "dog");
console.log(result);
