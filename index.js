let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
    count = count + 1;
    countEl.textContent  = count;
    
}

function save(){
    let countSepr = count + " - ";
    saveEl.textContent += countSepr;
    countEl.textContent  = 0;
    count = 0;





    console.log(count);

}
