const inputBox=document.getElementById("inputBox");
const listContener=document.getElementById("listContener");

function addTask(){
    if(inputBox.value===''){
        alert("you must write something!");
    } else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContener.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    
}

listContener.addEventListener("click",function (e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        
    } else if   (e.target.parentElement.remove());  saveData();
     
},false);

function saveData(){
    localStorage.setItem("data",listContener.innerHTML);
}

function showTask(){
    listContener.innerHTML=localStorage.getItem("data");
}
showTask();
