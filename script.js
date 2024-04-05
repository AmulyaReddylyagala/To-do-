const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container")
function fun(){
    if(inputBox.value==''){
        alert("you have to enter something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
