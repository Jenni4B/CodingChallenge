
// Button variables

    // Controls the counter
const clicker = document.getElementById('clicker');
const reset = document.getElementById('reset');
const minus = document.getElementById('minus');


// Controls the increment/decrement number

// let's the user control the increment/decrement amount
const userStepInt = document.getElementById('userStepInt');
const submitStep = document.getElementById('submitStep');
const resetStep = document.getElementById('resetStep');

// User inputs and main counter display
const countDisplay = document.getElementById('countDisplay');

// Lets the user choose a starting number
const userInput = document.getElementById('userInput');
const submitNum = document.getElementById('submitNum'); 


// Counter default
let count = 0;
let step = 1; // Default step value

// Function that updates the count based on step
function updateStep(newStep) {
    step = newStep; // Set the step value
    countDisplay.textContent = count; // Update the displayed count
}

// Submit step to change increment/decrement value
submitStep.addEventListener('click', function() {

    const stepInt = parseInt(userStepInt.value); // Get the user input as an integer
    updateStep(stepInt); // Update the step

});

resetStep.addEventListener('click', function(){
    step = 1; // reset to 1
    alert("Step has been reset");

})

// Adds to the counter
clicker.addEventListener('click', function() {
    count += step; // Increment the count by the current step
    countDisplay.textContent = count; // Update the displayed count
});

// Resets counter to zero
reset.addEventListener('click', function() {
    count = 0; // Reset the count
    countDisplay.textContent = count; 
});

// Subtracts from the counter
minus.addEventListener('click', function() {
    count -= step; // Decrement the count by the current step
    countDisplay.textContent = count; 
});

// Submits the user input to update the counter
submitNum.addEventListener('click', function() {

    const userValue = parseInt(userInput.value); // Get the user input value and convert to a number

    count = userValue; // Set count to the user input
    countDisplay.textContent = count; 

});
