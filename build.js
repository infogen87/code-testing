
// let count= 0;
// let countElement = document.getElementById(count-el)
// let saveElement = document.getElementById("save-el")

// function increment() {
// count++
// countElement.textContent = count;
// }


// function save() {
//     saveElement.textContent += "previous count:" + count
// }

let count = 0;
let countElement = document.getElementById("count-el");
let saveElement = document.getElementById("save-el");

function increment() {
  count++;
  countElement.textContent = count;
}

function save() {
  saveElement.textContent += " previous count: " + count;
}