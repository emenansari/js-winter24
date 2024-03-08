// ES6 CLASS/METHOD NOTATION
// 1.) ES6 "class" keyword to create Animal class
// a.) properties
class Animal {
  name;
  color;
  numOfEyes;
  numOfLegs;

  constructor(name, color, numOfEyes, numOfLegs) {
    this.name = name;
    this.color = color;
    this.numOfEyes = numOfEyes;
    this.numOfLegs = numOfLegs;
  }
  //b.) methods
  eat() {
    console.log("");
  }
  sleep() {
    console.log("");
  }
  walk() {
    console.log("");
  }
  run() {
    console.log("");
  }
}

// 2.) Animal class => Bird class
// a.) properties
class Bird extends Animal {
  canFly;

  constructor(name, color, numOfEyes, numOfLegs, canFly) {
    super(name, color, numOfEyes, numOfLegs);
    this.canFly = canFly;
  }
  // b.) methods
  fly() {
    console.log("");
  }
  peck() {
    console.log("");
  }
}

// 3.) Animal class => Dog class
// a.) properties
class Dog extends Animal {
  breed;

  constructor(name, color, numOfEyes, numOfLegs, breed) {
    super(name, color, numOfEyes, numOfLegs);
    this.breed = breed;
  }
  // b.) methods
  bark() {
    console.log("");
  }
  dig() {
    console.log("");
  }
}
