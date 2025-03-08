const addBtn=document.getElementById('inc')
const subBtn=document.getElementById('dec')
//const display=document.getElementById('display')

let counter=0;

function updateDisplay(){
display.textContent=counter;
}
function increaseValue () {
    counter+=1
    updateDisplay()
}
function decreaseValue () {
    counter-=1
    updateDisplay()
}

addBtn.addEventListener('click',     increaseValue)
subBtn.addEventListener('click', ()=>{
    decreaseValue();
})