const firstPerson = {
  firstName: "Sai",
  lastName: "Katta",
};

const secondPerson = {
  firstName: "Patrick",
  lastName: "Mahomes",
};

const printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

const printFirstPersonName = printName.bind(firstPerson);
printFirstPersonName(); // Sai Katta - bind method binds the object with method and returns a function which can be executed later

const printSecondPersonName = printName.bind(secondPerson);
printSecondPersonName(); // Patrick Nahomes - bind method binds the object with method and returns a function which can be executed later

const printNameWithHomeTown = function (hometown) {
  console.log(this.firstName + " " + this.lastName + " is from " + hometown);
};

const printFirstPersonWithHomeTown = printNameWithHomeTown.bind(
  firstPerson,
  "Hyderabad"
);
printFirstPersonWithHomeTown(); // Sai Katta is from Hyderabad

const printSecondPersonWithHomeTown = printNameWithHomeTown.bind(
  secondPerson,
  "Tyler"
);
printSecondPersonWithHomeTown(); // Patrick Mahomes is from Tyler

const printNameWithState = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " is from " + hometown + ", " + state
  );
};

const printFirstPersonWithState = printNameWithState.bind(
  firstPerson,
  "Hyderabad"
);
printFirstPersonWithState("Telangana"); // Sai Katta is from Hyderabad, Telangana

const printSecondPersonWithState = printNameWithState.bind(
  secondPerson,
  "Tyler"
);
printSecondPersonWithState(); // Patrick Mahomes is from Tyler, undefined
printSecondPersonWithState("Texas"); // Patrick Mahomes is from Tyler, Texas
