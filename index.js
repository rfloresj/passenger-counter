// document.getElementById("count-el").innerText = 5;

// Initialize the count as 0

// Store the variable to DisplayCount in HTML
let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment(){
    count = count + 1;
    countEl.innerText = count;
    console.log(count);
}