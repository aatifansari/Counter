

const ibtn=document.getElementById("i");
const dbtn=document.getElementById("d");
const rbtn=document.getElementById("r");
const time=document.querySelector("#value");
let count=0;

ibtn.addEventListener("click",
function(){
    count++;
    value.textContent=count;  
    
});

dbtn.addEventListener("click",
function(){
    if(count>0){
        count--;
    }
    
    value.textContent=count;
});

rbtn.addEventListener("click",
function(){
    count=0;
    value.textContent=count;
});

if(count>0){
    value.style.color="green";

}
if(count<0){
    value.style.color="red";
}
if(count==0){
    value.style.color="#222";
}