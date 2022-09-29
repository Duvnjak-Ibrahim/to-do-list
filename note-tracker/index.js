let inputEl=document.getElementById("input-el")
let subBtn=document.getElementById("submit-btn")
let clearBtn=document.getElementById("clear-btn")
let ulEl=document.getElementById("ul-el")
let deletelBtn=document.getElementById("deletel-btn")
let deletefBtn=document.getElementById("deletef-btn")


subBtn.addEventListener("click",function(){
    if(inputEl.value){
        ulEl.innerHTML+=`<li> ${inputEl.value} </li>`}
       
       
    inputEl.value=""
})

clearBtn.addEventListener("click",function(){
    inputEl.value=""
    ulEl.textContent=""
})

deletelBtn.addEventListener("click",function(){
    
    ulEl.removeChild(ulEl.lastElementChild) 
})
deletefBtn.addEventListener("click",function(){
    ulEl.removeChild(ulEl.firstElementChild)
})



