// Debounce Method

const debounce = function (fn, delay) {
  let timeOutID;
  return function () {
    let context = this;
    let args = arguments; // arguments is an array of parameters passed to an function
    clearTimeout(timeOutID);
    timeOutID = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

let counter = 1;

// Debouncing without any parameters

const getData = function () {
  // Assuming making an API Call
  console.log(`counter:`, counter++);
};

const provideSuggestions = debounce(getData, 2000);

// Debouncing with parameters

const fetchData = function (emotion) {
  console.log(`I am feeling ${emotion}`);
};

const getSuggestions = debounce(fetchData, 1000);

// My take on debouncing function

const anotherDebounce = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(arguments);
    }, delay);
  };
};

// const provideSuggestions = anotherDebounce(getData, 2000); - Working Fine
// const getSuggestions = debounce(fetchData, 1000); - Working Fine
