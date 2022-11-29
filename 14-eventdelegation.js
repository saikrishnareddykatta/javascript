// The importance of Event Delegation is to write a function in Parent Element which can be used in child elements
// instead of writing functions for each and every child element.

const category = document.querySelector("#category");

category.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event);
    console.log(`${event.target.textContent} category is being clicked !!!`);
    //window.location.href = "/" + event.target.id;
  }
});

// Instead of writing functions for both inputFirstName and inputLastName, we can have single for the parent element form
// const inputFirstName = document.querySelector("#inputFirstName");

// inputFirstName.addEventListener("keyup", (event) => {
//   event.target.value = event.target.value.toUpperCase();
// });

// const inputLastName = document.querySelector("#inputLastName");

// inputLastName.addEventListener("keyup", (event) => {
//   event.target.value = event.target.value.toLowerCase();
// });

// When dealing with forms and need an updated value, use keyup event instead of keydown
// keydown doesn't provide the updated value in the field

// In the below sceanrio, we will use the parent element to handle both child elements

const form = document.querySelector("#form");

// form.addEventListener("keyup", (event) => {
//   if (event.target.id === "inputFirstName") {
//     event.target.value = event.target.value.toUpperCase();
//   }
//   if (event.target.id === "inputLastName") {
//     event.target.value = event.target.value.toLowerCase();
//   }
// });

/* Consider a scenario where there are many fields and we have to apply this toUpperCase() method 
to few fields. It is not a standard coding practice to write if conditon for every field and check the name of the feild
and then make it Upper Case. We can use of behavorial pattern in Event Delegation to make a work around*/

/*We will make use of the data attributes*/

/* In this below scenario we want UpperCase feature for FirstName, City and State*/

form.addEventListener("keyup", (event) => {
  if (event.target.dataset.uppercase !== undefined) {
    event.target.value = event.target.value.toUpperCase();
  }
});
