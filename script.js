const buttons = document.querySelectorAll(".btn")
const screen = document.getElementById("Display")

 buttons.forEach((button) =>{
      button.addEventListener("click",(e)=>{
        let value = e.target.dataset.num;
        screen.value += value;
      })
    
 });   
