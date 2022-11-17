let personName = {
  firstName: "Sai",
  lastName: "Katta",
};

let personName2 = {
  firstName: "Virat",
  lastName: "Kohli",
};

let printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

printName.call(personName); // Sai Katta
printName.call(personName2); // Virat Kohli

let printNameWithHomeTown = function (hometown) {
  console.log(this.firstName + " " + this.lastName + " is from " + hometown);
};

printNameWithHomeTown.call(personName, "Hyderabad"); // Sai Katta is from Hyderabad
printNameWithHomeTown.call(personName2); // Virat Kohli is from undefined
printNameWithHomeTown.call(personName2, "Delhi"); // Virat Kohli is from Delhi

const printNameWithState = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " is from " + hometown + ", " + state
  );
};

printNameWithState.call(personName, "Hyderabad", "Telangana"); // Sai Katta is from Hyderabad
printNameWithState.call(personName2); // Virat Kohli is from undefined, undefined
printNameWithState.call(personName2, "Delhi", "NCR Delhi"); // Virat Kohli is from Delhi, NCR Delhi
