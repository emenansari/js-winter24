1; //
class Book {
  title;
  author;
  yearPublished;
}

constructor(title, author, yearPublished);
this.title = title;
this.author = author;
this.yearPublished = yearPublished;

getSummary = function () {
  return this.title, this.author, yearPublished;
};

// 2.
class Recatangle {
  width;
  height;
}
constructor(width, height);
this.width = width;
this.author = author;
this.yearPublished = yearPublished;

calculateArea.prototype.getcalculateArea = function () {
  return this.calculateArea;
};

calculatePerimeter.prototype.getcalculatePerimeter = function () {
  return this.calculatePerimeter;
};

// 3.
class Vechile {
  make;
  model;
  year;
}
constructor(make, model, year);
this.make = make;
this.model = model;
this.year = year;

getInfo = function () {
  return this.make, this.model, this.year;
};

class Car extends vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }

  getInfo = function () {
    return super.getinfo;
  };
}
class Truck extends Vehicle {
  construction(make, model, year, loadCapicity) {
    super(make, model, year);
    this.loadCapicity = loadCapicity;
  }
  getInfo() {
    return super.getInfo(this.loadCapicity);
  }
}
