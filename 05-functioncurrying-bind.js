// Function Currying through bind method

const multiply = function (x, y) {
  console.log(x * y);
};

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5); // 10

const multiplyByFour = multiply.bind(this, 4);
multiplyByFour(16); //64

const anotherMultiply = function (x, y, z) {
  console.log(x * y * z);
};

const anotherMultiplyBy3 = anotherMultiply.bind(this, 3);
anotherMultiplyBy3(10, 6); // 180

const anotherMultiplyBy5 = anotherMultiply.bind(this, 5, 7);
anotherMultiplyBy5(6); // 210

let anotherMultiplyBy7 = anotherMultiply.bind(this);
anotherMultiplyBy7(6); // NaN - we have to pass 3 arguments

anotherMultiplyBy7 = anotherMultiply.bind(this, 7);
anotherMultiplyBy7(6, 3); // 126
