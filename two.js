



let getValue=localStorage.getItem("userName");

document.getElementById("head").innerHTML="Hello "+getValue;

let input1=document.getElementById("input1");
let buton=document.getElementById("buton");
let root=document.getElementById("root");
let backbtn=document.getElementById("backbtn");
buton.addEventListener("click",function(){
  
    buton.textContent="add again";
    


    let head=document.createElement("h1");
    head.textContent=input1.value;

    root.appendChild(head);
    input1.value="";
   

})

backbtn.addEventListener("click",function(){
  window.location="pageone.html";
})
