//deliverable 1
//q1 - different type of usage of this and q2 examples
// this in global Scope
this.table = "window table";
console.log(table);
// this in local scope using let
let jakeRoom = {
  table: "Jake's Room",
};
// this using var
var garage = {
  table: "garage table",
};

//q3 - Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.
//q4 -Write a function to check whether the student is egligible or not for college. If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.
//q5 creating 5 different classed
//q6 static
var count = 0;
class Student {
  constructor(name, age, phno, marks) {
    count += 1;
    this.name = name;
    this.age = age;
    this.phno = phno;
    this.marks = marks;
  }
  eligible() {
    if (this.marks < 40) {
      console.log("not eligible");
    } else {
      console.log("Eligible");
    }
  }
  static createdUsers() {
    console.log(`number of users created = ${count}`);
  }
}
let s1 = new Student("jane", 20, 293280, 45);
let s2 = new Student("james", 21, 293280, 25);
let s3 = new Student("jack", 22, 293280, 35);
Student.createdUsers();
let s4 = new Student("fruit", 23, 293280, 85);
let s5 = new Student("harry", 19, 293280, 0);
Student.createdUsers();
//use constructors

// const clean = function (soap) {
//   //   let that = this; just use that instead of this
//   const inner = (saop) => {
//     console.log(`cleaned ${this.table} using ${soap}`);
//   };
//   inner(soap); //for arrow functions only
//   //   inner.call(this, soap);
//   //   inner.bind(this)(soap);
// };
// clean.call(this, "soap1");

// console.log(this.garage.table);

// //constructor
// let createTable = function (name) {
//   this.table = `${name}'s table`;
// };
// //adding clean method to constructor
// createTable.prototype.clean = function (soap) {
//   const inner = (saop) => {
//     console.log(`cleaned ${this.table} using ${soap}`);
//   };
//   inner(soap);
// };

//constructors using class
class createTable {
  constructor(name) {
    this.table = `${name}'s table`;
  }
  clean(soap) {
    console.log(`${this.table} is cleaned by ${soap}`);
  }
}

let johnRoom = new createTable("John");
let jillRoom = new createTable("Jill");
johnRoom.clean("soap1");
jillRoom.clean("soap2");

// console.log(this.johnRoom.table);=> error as this cannot be used as let is private
// johnRoom.clean(); when function is declared within
// this.garage.clean();
// clean.call(this.garage, "soap2");
// clean.call(johnRoom, "soap3");
// clean.call(jillRoom, "soap4");
