//- encapsulation :
//- inheritance: uses extend so subclass has same properties as superclass
//- polymorphism

1; //
class Book {
  title;
  author;
  yearPublished;

  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }

  getsummary() {
    return `${this.title} is written by ${this.author} and published in ${yearPublished}`;
  }
}

const ulysses = new Book("Uslysses", "james joyce", "1922");
// console.log(ulysses.getsummary());

// 2.
class Recatangle {
  width;
  height;

  constructor(width, height) {
    this.width = w;
    this.height = h;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return this.width * 2 + this.height * 2;
  }
}

// 3.
class Vechile {
  make;
  model;
  year;

  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `${this.make}, is for ${this.model}, made in ${this.year}`;
  }
}
class Car extends vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }

  getInfo() {
    return `${super.getinfo}, amount of ${this.numDoors}`;
  }
}
class Truck extends Vehicle {
  construction(make, model, year, loadCapicity) {
    super(make, model, year);
    this.loadCapicity = loadCapicity;
  }
}
  getInfo(){
    return `${super.getInfo}, ${this.loadCapicity}`;
  }

  // 4. 

  class Employee {
    #name
    #id
    #email
     
    constructor(name,id, email) {
      this.#name = name;
      this.#id = id;
      this.#email = email;
    }
  
  getName () {
    return this.#name;
  }

  getId () {
    return this.#id;
  }

  getEmail (){
    return this.#email;
  }
  } 

  class Crewmember extends Employee {
    #manager;
     constructor(name,id, email, manager) {
      super (name, id, email);
      this.#manager = manager
     }
  
  getManager() {
    return this.#manager;
  }

  setManager(manager) {
    this.#manager = manager;
  }
}
 class Manager extends Employee {
  #subordinates;
  constructor(name, id, email){
    super(name, id, email);
    this.#subordinates = subordinates
  }
  getSubordinates () {
    return this.#subordinates
  }
  addSubordinates (employee) {
    this.#subordinates.push(employee);
  }
  removeSubordinates(employee) {

  }
 }