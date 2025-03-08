let display = document.querySelector('input[name="display"]');
let clearAfterResult = false; 

function updateDisplay(disp) { 
    if (clearAfterResult) {
        display.value = ""; 
        clearAfterResult = false; 
    }

    if (disp === '=') {
        try {
            display.value = eval(display.value);
            clearAfterResult = true; 
        } catch (error) {
            display.value = "Error"; 
            clearAfterResult = true;
        }
    } else {
        display.value += disp; 
    }
}

function buttonClickEffect(btn) {
  btn.classList.add("clicked");
  setTimeout(() => btn.classList.remove("clicked"), 150); 
}

document.querySelectorAll(".btn").forEach(btn=> {
  btn.addEventListener("click", function() {
      buttonClickEffect(this);
  });
});


  function clearDisplay(){
    display.value=""
  }

  function delDisplay(){
    display.value = display.value.toString().slice(0, -1);
  }

  const Buttons=document.querySelectorAll('.btn')
  const AC=document.querySelector('.ac')
  const Del=document.querySelector(' .dec')

   display.value = display.value.slice(0, -1);

  AC.addEventListener ('click' ,()=>{
    clearDisplay()
  })

  Del.addEventListener ('click', () =>{
    delDisplay()
  })

 
 Buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
      updateDisplay(button.value)
    } )
  }) 
