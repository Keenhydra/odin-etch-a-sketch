//JavaScript

parent = document.querySelector(".container")

const row = document.createElement('div')
const block = document.createElement('div')
block.className = "block"
row.className = "row"

for (let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.className = `row ${i+1}`;
    parent.appendChild(row);
    for (let j = 0; j < 16; j++){
        const block = document.createElement('div');
        block.className = "block";
        row.appendChild(block)
    }
}

const slider = document.getElementById("gridSize");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2")
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
            block.className = `block`;
            row.appendChild(block)
        }  
    } 
}








function black(e) {
    this.style.backgroundColor = '#fff';
  }
function eraser(e){
    this.style.backgroundColor = '#201547'
}


function draw(){
    const blocks = document.getElementsByClassName("block");
    currentvalue = document.getElementById('draw').value;
    if(currentvalue == "Off"){
        document.getElementById("draw").value="On";
        document.getElementById("draw").className="button-on";
        let blockArray = Array.from(blocks);
        blockArray.forEach(element => {
            element.addEventListener('mouseover', black)
        })
        
    }else{
        document.getElementById("draw").value="Off";
        document.getElementById("draw").className="button";
        let blockArray = Array.from(blocks);
        blockArray.forEach(element => {
            element.removeEventListener('mouseover', black)
        })
    }
}

function erase(){
    const blocks = document.getElementsByClassName("block");
    currentvalue = document.getElementById('erase').value;   
    if(currentvalue == "Off"){
        document.getElementById("erase").value="On";
        document.getElementById("erase").className="button-on";
        let blockArray = Array.from(blocks);
        blockArray.forEach(element => {
            element.addEventListener('mouseover', eraser)
        })
    }else{
        document.getElementById("erase").value="Off";
        document.getElementById("erase").className="button";
        let blockArray = Array.from(blocks);
        blockArray.forEach(element => {
            element.removeEventListener('mouseover', eraser)
        })
    }
}

function reset(){
    const blocks = document.getElementsByClassName("block");
    let blockArray = Array.from(blocks);
    blockArray.forEach(element => {
        element.style.backgroundColor = '#201547'});
}


function showGrid(){
    const blocks = document.getElementsByClassName("block");
    currentvalue = document.getElementById('show-grid').value;   
    if(currentvalue == "Off"){
        document.getElementById("show-grid").value="On";
        document.getElementById("show-grid").className="button-on";
        let blockArray = Array.from(blocks);
        blockArray.forEach(element => {
            element.style.border = '#051C2C solid 0.1px';
        })
    }else{
        document.getElementById("show-grid").value="Off";
        document.getElementById("show-grid").className="button";
        let blockArray = Array.from(blocks);
        blockArray.forEach(element => {
            element.style.border = '#051C2C solid 0px'
        })
    }
}
