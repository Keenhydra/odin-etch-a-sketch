//JavaScript

parent = document.querySelector(".container")

const row = document.createElement('div')
const block = document.createElement('div')
block.className = "block"
row.className = "row"

//number = 16;

const slider = document.getElementById("gridSize");
const output1 = document.getElementById("demo1");
const output2 = document.getElementById("demo2")
output1.innerHTML = slider.value;
output2.innerHTML = slider.value;


slider.oninput = function() {
    number = this.value;
    output1.innerHTML = this.value;
    output2.innerHTML = this.value;
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }   
    for (let i = 0; i < number; i++){
        const row = document.createElement('div');
        row.className = `row ${i+1}`;
        parent.appendChild(row);
        for (let j = 0; j < number; j++){
            const block = document.createElement('div');
            block.className = "block";
            row.appendChild(block)
        }  
    } 
}


