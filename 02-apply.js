let firstPerson = {
  firstName: "Sai",
  lastName: "Katta",
};

const secondPerson = {
  firstName: "Mahendra Singh",
  lastName: "Dhoni",
};

const personName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " is from " + hometown + ", " + state
  );
};

personName.call(firstPerson, "Hyderabad", "Telangana"); // Sai Katta is from Hyderabad, Telangana
personName.apply(secondPerson, ["Ranchi", "Jharkhand"]); // Mahendra Singh Dhoni is from Ranchi, Jharkhand
personName.apply(firstPerson, ["Hyderabad", "Telangana"]); // Sai Katta is from Hyderabad, Telangana
