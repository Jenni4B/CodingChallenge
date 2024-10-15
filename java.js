const clicker = document.getElementById('clicker')
const countDisplay = document.getElementById('countDisplay')
const reset = document.getElementById('reset')
const minus = document.getElementById('minus')

let count = 0;

clicker.addEventListener('click', function(){
    count++;

    countDisplay.textContent = count;


});

reset.addEventListener('click', function(){
    count = 0;

    countDisplay.textContent = count;

})

minus.addEventListener('click', function(){
    count--;

    countDisplay.textContent = count;

})