// Function Currying through closures

const multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

const multiplyByTwo = multiply(2);
multiplyByTwo(9); // 18
multiplyByTwo(49); // 98

const multiplyByThree = multiply(3);
multiplyByThree(4); // 12
multiplyByThree(35); // 105

multiply(3)(8); // 24
multiply()(8); // NaN
multiply(3)(); // NaN

const anotherMultiply = function (x) {
  return function (y) {
    return function (z) {
      console.log(x * y * z);
    };
  };
};

const multiplyBySix = anotherMultiply(6);
multiplyBySix(2)(3); // 36
multiplyBySix(9)(2); // 108
multiplyBySix(4)(8); // 192

anotherMultiply(2)(6)(3); // 36

const multiplyByFive = anotherMultiply(5)(1);
multiplyByFive(7);
