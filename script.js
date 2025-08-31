// Part 1: Variable Declarations and Conditionals

let userName = "Student";
let userAge = 20;

// Conditional check
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is not an adult.");
}


// Part 2: Custom Functions

function greetUser(name) {
  return "Hello, " + name + "! Welcome to the project.";
}

function isEven(number) {
  return number % 2 === 0;
}


// Part 3: Loops


// Example 1: For loop (adding numbers to list)
let numbers = [1, 2, 3, 4, 5];
let listContainer = document.getElementById("numberList");
for (let i = 0; i < numbers.length; i++) {
  let li = document.createElement("li");
  li.textContent = numbers[i];
  listContainer.appendChild(li);
}

// Example 2: While loop (countdown in console)
let count = 5;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}


// Part 4: DOM Interactions


// 1. Change text content when button is clicked
document.getElementById("showMessageBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = greetUser(userName);
});

// 2. Check number input and display result
document.getElementById("checkNumberBtn").addEventListener("click", function() {
  let userValue = document.getElementById("userInput").value;
  if (userValue === "") {
    document.getElementById("checkResult").textContent = "Please enter a number.";
  } else if (isEven(userValue)) {
    document.getElementById("checkResult").textContent = userValue + " is even.";
  } else {
    document.getElementById("checkResult").textContent = userValue + " is odd.";
  }
});

// 3. Change background color dynamically
document.body.addEventListener("dblclick", function() {
  document.body.style.backgroundColor = "#dff9fb";
});
