// Below are the methods for Event Bubbling

const grandParent = document.querySelector("#grandparent");
grandParent.addEventListener("click", () => {
  console.log("GrandParent Clicked !!!");
}); // Event Bubbling - since useCapture flag is null/undefined or a falsy value

const parent = document.querySelector("#parent");
parent.addEventListener("click", () => {
  console.log("Parent Clicked !!!");
}); // Event Bubbling - since useCapture flag is null/undefined or a falsy value

const child = document.querySelector("#child");
child.addEventListener("click", () => {
  console.log("Child Clicked !!!");
}); // Event Bubbling - since useCapture flag is null/undefined or a falsy value

// On click of child  event
// Child Clicked
// Parent Clicked
// GrandParent Clicked

// --------------------------------------------------------------------------------------------------------------------------------

// Below are the methods for Event Capturing or Event Trickling

const grandParentCapturing = document.querySelector("#grandparent");
grandParentCapturing.addEventListener(
  "click",
  () => {
    console.log("GrandParent Clicked !!!");
  },
  true
); // Event Capturing - since useCapture flag is true

const parentCapturing = document.querySelector("#parent");
parentCapturing.addEventListener(
  "click",
  () => {
    console.log("Parent Clicked !!!");
  },
  true
); // Event Capturing - since useCapture flag is true

const childCapturing = document.querySelector("#child");
childCapturing.addEventListener(
  "click",
  () => {
    console.log("Child Clicked !!!");
  },
  true
); // Event Capturing - since useCapture flag is true

// On click of child  event
// GrandParent Clicked
// Parent Clicked
// Child Clicked

// --------------------------------------------------------------------------------------------------------------------------------

// Below are the methods with Mix and Match of useCapture flag

const grandParentMixandMatch = document.querySelector("#grandparent");
grandParentMixandMatch.addEventListener(
  "click",
  () => {
    console.log("GrandParent Clicked !!!");
  },
  true
); // Event Capturing - since useCapture flag is true

const parentCapturingMixandMatch = document.querySelector("#parent");
parentCapturingMixandMatch.addEventListener(
  "click",
  () => {
    console.log("Parent Clicked !!!");
  },
  false
); // Event Bubbling - since useCapture flag is false

const childCapturingMixandMatch = document.querySelector("#child");
childCapturingMixandMatch.addEventListener(
  "click",
  () => {
    console.log("Child Clicked !!!");
  },
  true
); // Event Capturing - since useCapture flag is true

// On click of child  event - Acc to W3C, In event propogation event capturing happens first and then the event bubbling occurs.
// GrandParent Clicked
// Child Clicked
// Parent Clicked

// --------------------------------------------------------------------------------------------------------------------------------

// Below are the methods with event.stopPropogation() method

// Event Bubbling and Event Capturing are costly operations and in order to minimise the operations
// we can use event.stopPropogation() to stop the event propogation in any particular event

const grandParentEventPropogation = document.querySelector("#grandparent");
grandParentEventPropogation.addEventListener("click", (event) => {
  console.log("GrandParent Clicked !!!");
}); // Event Bubbling - since useCapture flag is false/undefined

const parentEventPropogation = document.querySelector("#parent");
parentEventPropogation.addEventListener(
  "click",
  (event) => {
    console.log("Parent Clicked !!!");
    event.stopPropagation();
  },
  false
); // Event Bubbling - since useCapture flag is false/undefined
// event.stopPropagation() stops the event to be propogated

const childEventPropogation = document.querySelector("#child");
childEventPropogation.addEventListener(
  "click",
  () => {
    console.log("Child Clicked !!!");
  },
  false
); // Event Bubbling - since useCapture flag is false/undefined

// On click of child  event - Acc to W3C, In event propogation event capturing happens first and then the event bubbling occurs.
// Child Clicked
// Parent Clicked

// --------------------------------------------------------------------------------------------------------------------------------
