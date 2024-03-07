// 1.) constructor function for Animal
// a.) properties
function Animal(color, numOfEyes, numOfLegs) {
  this.color = color;
  this.numOfEyes = numOfEyes;
  this.numOfLegs = numOfLegs;
}
// b.) methods
Animal.prototype.eat = function () {
  console.log;
};
Animal.prototype.sleep = function () {
  console.log;
};
// c.) assigned to different variables
const Animal1 = new Animal("blue", "4", "8");
const Animal2 = new Animal("black", "8", "8");
const Animal3 = new Animal("white", "2", "2");

// 2.) constructor function for Bird
// a.)
function Bird(name, color, ableToFly) {
  this.name = name;
  this.color = color;
  this.ableToFly = ableToFly;
}
// b.) methods
Bird.prototype.eat = function () {
  console.log;
};
Bird.prototype.sleep = function () {
  console.log;
};
getName();
{
  return this.name;
}
setName();
{
  if (typeof newName !== "name") return;
  this.name = newName;
}
