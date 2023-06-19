
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let reset = document.getElementById("reset");

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

//Creates a function, save(), which prints out the count when it's called

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}