










const parent=document.querySelector(".parent")
const firstChild=document.querySelector(".first")
const secondChild=document.querySelector(".second")


parent.addEventListener("click",handle,false)
firstChild.addEventListener("click",pandle,true)

secondChild.addEventListener("click",tandle,true)
function handle(){
  console.log("parent")
}
function pandle(){
  console.log("1st child")
}

function tandle(){
  console.log("secondchold")
}


















/*
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")
const list = document.querySelector(".list")
console.log(parent ,child,list)*/
//event triggering --if you change boolean to false whic is default vlue then it is bubbling
/*
child.addEventListener("click",()=>{
    console.log("hii i am the first a/c to bubbling")
},true)
parent.addEventListener("click",function(){
    console.log("hii i am 2nd a/c to bubbling")
},true)
//e.stoptopagtion to stop
*/
//event delegation
/*
document.addEventListener("click",(e)=>{
    if(e.target.tagName==='LI'){

        const clickedItem = e.target;
        console.log("Clicked on " + clickedItem.textContent);
        console.log("ffff")
    }
})*/
/*

///bad way-
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    console.log(event.target.innerText)
  })
})

//best way
const div = document.querySelector('div')

div.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log(event.target.innerText)
  }
})*/


(() => {
  let x = y = 10;
})();
console.log(y)