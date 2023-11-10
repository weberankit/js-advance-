const parent=document.querySelector(".parent")
const child=document.querySelector(".child")
const list = document.querySelector(".list")
console.log(parent ,child,list)
//event triggering --if you change boolean to false whic is default vlue then it is bubbling
/*
child.addEventListener("click",()=>{
    console.log("hii i am the first a/c to bubbling")
},true)
parent.addEventListener("click",function(){
    console.log("hii i am 2nd a/c to bubbling")
},true)

*/
//event delegation
document.addEventListener("click",(e)=>{
    if(e.target.tagName==='LI'){

        const clickedItem = e.target;
        console.log("Clicked on " + clickedItem.textContent);
        console.log("ffff")
    }
})
