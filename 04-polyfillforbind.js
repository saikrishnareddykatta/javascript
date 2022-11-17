let firstPerson = {
  firstName: "Sai",
  lastName: "Katta",
};

let secondPerson = {
  firstName: "Travis",
  lastName: "Kelce",
};

const printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

const printNameWithHomeTown = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " is from " + hometown + ", " + state
  );
};

const printNameWithCountry = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " is from " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
};

const firstPersonName = printName.bind(firstPerson);
console.log(firstPersonName);
firstPersonName(); // Sai Katta

// Polyfill for the bind method
// const secondPersonName = printName.mybind(secondPerson);
// secondPersonName(); - Travis Kelce

Function.prototype.mybind = function (...args) {
  // mybind is our polyfill and in order to appear for every method we need to add it to Function Prototype
  let obj = this; // printName.mybind(), in this we need to access printName which we can do by using this keyword
  return function () {
    obj.call(args[0]);
  };
};

const secondPersonName = printName.mybind(secondPerson);
secondPersonName(); // Travis Kelce

// polyfill for bind with multiple parameters

Function.prototype.mybind2 = function (...args) {
  // mybind2 is our polyfill and in order to appear for every method we need to add it to Function Prototype
  let obj = this; // printNameWithHomeTown.mybind2(), in this we need to access printName which we can do by using this keyword
  let params = args.slice(1);
  return function () {
    obj.apply(args[0], params);
  };
};

const secondPersonWithHomeTown = printNameWithHomeTown.mybind2(
  secondPerson,
  "Westlake",
  "Ohio"
);
secondPersonWithHomeTown(); // Travis Kelce is from Westlake, Ohio

// polyfill for bind with multiple parameters with parameter from executable function

Function.prototype.mybind3 = function (...args) {
  // mybind3 is our polyfill and in order to appear for every method we need to add it to Function Prototype
  let obj = this; // printNameWithCountry.mybind3(), in this we need to access printName which we can do by using this keyword
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const firstPersonWithCountry = printNameWithCountry.mybind3(
  firstPerson,
  "Hyderabad",
  "Telanagana"
);
firstPersonWithCountry("India"); // Sai Katta is from Hyderabad, Telangana, India
