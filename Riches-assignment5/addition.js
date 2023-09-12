let increment = document.getElementById("increment");
let counter = document.getElementById("counter");
let count = 0
    
increment.addEventListener("click",adding);
    
function adding() {
    count +=1
    counter.textContent += count
    console.log(increment);
}