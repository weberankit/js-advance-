///deepcopy vs shallow copy

let obje={
  name:"Amkit",
  arrt:{
    age:{
      number:8888
    }
  }
}/*
console.log(Object.keys(obj))


const clone={...obj}
clone.arrt.age.number=999
console.log(obj,clone,"ll")


const firstMethod=JSON.parse(JSON.stringify(obj))
console.log(firstMethod)
firstMethod.arrt.age.number=88887665
console.log(obj,clone,firstMethod)

*/


//now long and interview method

function check(obj){

if(typeof obj !== "function" || obj !== null){
  console.log(obj)
  return obj
}
const copyObj=Array.isArray(obj)?[]:{}
const keys=Object.keys(obj)
for(let i=0;i<keys.length;i++){
 copyObj[keys[i]]= check(obj[keys[i]])
}

}




const copied=check(obje)
console.log(copied)





//polyfillfor reduce



/*

const b=art.reduce((acc,cur)=>{
acc=acc+cur
  return acc
},4)

console.log(b)


const art= [1,23,4,44]

Array.prototype.tap=function(fn,initial){
  for(let i=0 ;i<this.length;i++){
if(initial){
initial= fn(initial,this[i])

}else{
initial=this[i]
}
}
return initial
}

const b=art.tap((acc,cur)=>{
  acc=acc+cur
    return acc
  },4)
  
  console.log(b)

*/















//ployfil for fitler
/*
const art= [1,23,4,44]
const b=art.filter((item)=>{

  return item>4
})

console.log(b)


Array.prototype.tap=function(fn){
  if(typeof calling !== "function"){
    throw Error("not passed function")
}
  const arr=[]
for(let i=0;i<this.length;i++){
 
  
  if(fn(this[i])){
    arr.push(this[i])
  }
  
}
return arr
}


const c=art.tap((item)=>{

  return item>23
})
console.log(c)



///map 
const art= [1,23,4,44]
art.map((item)=>{
  item=item*5
  console.log(item)
})

Array.prototype.tap=function(fn){
if(typeof fn !== 'function'){
  return 
}
const array=[]
for(let i=0;i<this.length;i++){
 
  array.push( fn(this[i],i))
}
return array


}


const b=art.tap((item)=>{
  console.log(item)
  return item
})
console.log(b)












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














const btn=document.querySelector(".btn")
console.log(btn)
let count=0

function deo(){
  count++
  console.log(count)
}


  let timer
function debounce(fn,delay){
  console.log("k")

  if(timer){
    clearTimeout(timer)
  }
  timer=setTimeout(()=>{
   fn()
  },delay)
}



btn.addEventListener("click",
  debounce(deo,300)
)














class Profile{
  constructor(a,b){
 this.name=a,
 this.b=b
  }

set name(val){
this._name=val
}
get name(){
  return this._name.toUpperCase()
}




}
const a = new Profile("Ank","dd")
console.log(a.name)





//obj

let  Profilet={

 name:"Anjjd",
 
  

set _name(val){
this.name=val
},
get _name(){
  return this.name.toUpperCase()
}




}

console.log(Profilet["_name"],Profilet)













class Aman{
  constructor(p){
this.name=p
  }

getData(){
  console.log(this.name)
}

static killTime(){
  console.log("don't waste time on yt but invst there")
}


}
const a= new Aman("Ankit")
//console.log(a)

console.log(a.getData())
class tw extends Aman{
  constructor(d,p){
    super(d)
    this.k=p
  //  console.log(this.k)
  }



}

const b= new tw("l","ll")
console.log(b.getData())




function orange(){
  this.name="dka"
  console.log(this.name)
}
//orange.prototype.names=3


const a= new orange()
console.log(a.__proto__.__proto__,orange.prototype,)







let obj2={
  ll:"pp",
  k:"j"
}
let obj={name:"kk",
  kk:4,
  __proto__:obj2
}
let obj3={
  j:3,o:3
}
Object.setPrototypeOf(obj,obj3)
console.log(obj,Object.getPrototypeOf(obj))




function b(){
  console.log("Ankit  singh")
}
b.imd="kcodc"
b.prototype.say="hi"
console.log(b.imd)

console.log(b.prototype,b.__proto__,Object.getPrototypeOf(b))


function b(){
  this.name=2
  this.age=88
}
b.prototype.say="hi"


//console.log(b().say) error
const a=new b()
console.log(a.say)


const obj={
  item:"ll"
}
/*
obj.prototype.d="l"
//console.log(obj.d)  error
*/

//basically here protype is property in which we adding as its property is inot inherit by instnces
/*
function d(){
  let r=9
 // return r not necssary
 this.name="dd"
}
d.prototype.sat="l"

console.log(d.prototype,d.sat) //out--{sat:l},undefined

const h=new d()
console.log(h.sat)







function a(name,joker){
  var at="DD"
 this.name=name
this.joker=joker
console.log(name,joker)
}
//a("ll","kk")


let n=new a(1,2)
let m = new a (1,2)
console.log(window.name,  n,m)


const btns=document.querySelector(".btns")

function exponcall(){
  this.name="akka"
  this.hn=function(){
    console.log(this)
  }
}
let obj={name:"lkj"}
btns.addEventListener("click",handle)
function handle(){
  console.log("ll")
  exponcall()
  console.log(window.hn.call(obj))
window.hn.call(obj)
}


let obj={
  namme:"kkf",
  print:function(){
    console.log(this.namme)
  }
}
let tob={namme:"kk"}
obj.print.bind(tob)()



const btns=document.querySelector(".btns")


function ama(){
  console.log(this,"ok")
  this.name="ankit"
  const btn=document.querySelector(".btn")

  this.handleClick=function(x){
    console.log(this.name)
  }
  btn.addEventListener("click",this.handleClick.bind(this))
}
ama()

btns.addEventListener("click",()=>{
  console.log(window.name,window.handleClick())
})

const user = {
  id: 551,
  name: 'Tom',
  getId() {
    return this.id;
  },
  credentials: {
    id: 120,
    username: 'tom',
    getId() {
      return this.id;
    }
  },
};

const getId = user.credentials.getId;
console.log(getId());
const b=getId()
console.log(b)


const btn=document.querySelector("button")
function ama(){
  this.name="Ankit"
  this.a=function (){
    console.log(this)
  }
  this.b=()=>{
    console.log(this)
  }
}

//ama().a()
const t = new ama()
console.log(t.a(),t.b())



let count=0

function operate(){
  this.increment=function(){
    ++count
  }
  this.decrement=function(){
    count--
  }
}
const a= new operate()
btn.addEventListener("click",()=>{
  a.increment()
  console.log(count)
})



const myPromise = () => Promise.resolve('I have resolved!');
function a(){
  const p=new Promise((resolve,reject)=>{
    resolve("ll")
  })
  return p
}
function firstFunction() {
  //  myPromise().then(res => console.log(res));
 
}

async function secondFunction() {
    console.log(await myPromise());
    console.log(await a())
    
}

firstFunction();
secondFunction();




Promise.resolve(5);

async function* range(start, end) {
  for (let i = start; i <= end; i++) {
        yield Promise.resolve(i);
  }
}

(async () => {

  const gen =  range(1, 3);

  for await (const item of gen) {
        console.log(item);
  }
})();


const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
console.log(promise)
promise.then((res) => {
  console.log(res);
});
console.log(4);;
async function getData() {
  return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);

getData().then((item)=>{
  console.log(item)
})








const p2=new Promise((resolve,reject)=>{
  console.log("this is Ankit")
  setTimeout(()=>{
   resolve("kingh")
  },3000)
})


const p3=new Promise((resolve,reject)=>{
  console.log("this is a boy")
resolve(p2)
})


p3.then(item=>item).then(p=>console.log(p))






















const pr=new Promise((resolve,reject)=>{
   setTimeout(()=>{
console.log("kk")
 reject("pr")

  },1000)
 
})



const qr=new Promise((resolve,reject)=>{

 setTimeout(()=>{
  

      resolve("qr")
      },5000)


})

const store=Promise.race([pr,qr])
console.log(store)

store.then((itm)=>{
  console.log(itm)
})

*/



/*
async function item(){
  const c=await pr
 console.log(c)

  const d=await qr
  console.log(d)
}

item()





const Promised=new Promise((resolve,reject)=>{
  const fetching=fetch("https://api.github.com/users/weberankit")
  resolve(fetching)
})

Promised.then((item)=>{
  console.log(item)
  return item.json()
}).then((item)=>{
  console.log(item)
})



async function am(){
  const data= await fetch("https://api.github.com/users/weberankit")
  const result = await data.json()
  console.log(result)
  const dta=await fetch("https://api.github.com/users/knadh")
  const json=await dta.json()
  console.log(result,json)
  console.log("hh")
}

am()*/
/*
const n=Promise.resolve("this is game")
console.log(n,"kk")

let item=false
let id=82638
const call=()=>{
  const p=new Promise((resolve,reject)=>{
  if(item){
    resolve(id)
  }else{
    reject("soory")
  }
  })
  return p
}
call().then((i)=>{
  console.log(i)
  return i
}).catch((i)=>{
  console.log("error happenrd",i)
//to retuen any vlue
return i
}).then((i)=>{
console.log(i,"kk")
}).catch(()=>{
  console.log("not happened")
})

*/

{

/*function x() {
  // the below value depends on strict/non-strict mode
  console.log(this);
  // in strict mode - undefined
  // in non-strict mode - refers to global window object
}
x();


//const p = new Promise((resolve, reject) => {
  setTimeout(() => {
resolve("weberankit")
  }, 5000);
});


    // Define p2 that depends on the value of p
   




async function handlePromise() {
  console.log('Hi');

  try {
    const val = await p;  // waits 5 seconds for p to resolve
    console.log('Hello There!');
    console.log('Value from p:', val);  // logs the value of p
 const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
      const a=fetch(`https://api.github.com/users/${val}`)
        resolve(a); // Using the resolved value of p
      }, 2000);
    });


    const val2 = await p2;  // p2 will not execute if p fails
    console.log('Hello There! 2');
    console.log('Value from p2:', val2);
   const val3=await val2.json()
   console.log(val3)


    // logs the value of p2
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
}

handlePromise();



 First name of all people whose age is less than 30
const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

const a= users.filter((item)=>{
  if(item.age<30){
    return item.firstName
  }
}).map((item)=>{
  return item.firstName
})
console.log(a)
const b=users.reduce((acc,curr)=>{
if(curr.age<30){
  acc.push(curr.firstName)
}
return acc
},[])
console.log(b)


document.querySelector("button").addEventListener("click",handle)
function handle(){
  console.log("ll")
}


function call(str,callback){
setTimeout(()=>{
console.log(str)
callback()
},1000)
}

call("ankit",()=>{
  call("aman",()=>{
    call("joker",()=>{
      call("poker",()=>{
        call("toking",()=>{
          console.log("done")
        })
      })
    })
  })
})





console.log("kkr is back")
//console.log(a)
console.log(window.a)

let a=9
var b=0
add()

function add(){
  console.log(b,a)
  let c=b+a
  console.log(c)


  function sub(){
    console.log(c)
  }
  sub()
}

console.log(window.xc)



const obj={aman:"33",3:"ww"}
const ch=Array.from(obj)
console.log(ch)



const set=new Set(["ee","ee","l"])
set.add("#ee")
set.delete(23)
console.log(set)

const arr=["S","S"]
console.log(new Set(...arr))


/*let str=["SSs"]

console.log(str.push("ss"))
console.log(str)
console.log(...str)
function a(c,...b){
console.log(c,b)
console.log(...b)
}
a(3,...[9,8,9])



const user={
  name:"hh",
  p:"ll"
}
function userDetail({name,p}){
  console.log(name,p)
}
userDetail(user)













/*console.log("kingh is kingh no one can think on this it s very unreal question now question is asked how it is going to be done in nice way ;let me")


///goinng to explaincall method

function call(){
this.names="ankit"
this.handleClick=function(){
  console.log(this)
}


  let btn=document.querySelector("button")
btn.addEventListener("click",this.handleClick.bind(this))

//console.log(this.names)
return this
}



call()


function users(val){
//  console.log(user,"not",this)
this.name=val
return this
}


function createUser(user,password,age){
 const b= users(user)
// console.log(b.name)
//const a=users.call(this,"kk") 
this.bb=b.name
  this.pass=password
  this.age=age
  return this
}


const n=new createUser(1,2,3)

console.log(n)














/*
static void swap(int[] array , int index1 , int index2){
    //stroe start index value
   int rem = array[index1];
   //assign 1st  index value to end index value
   array[index1] = array[index2];
   //assign 2nd index val to 1st index value
   array[index2] = rem;
   System.out.print(array[index1] +"" + array[index2]);


}
*/
/*
let arr=[1,2,3,44,3,55,55,33]

//second largest nnumber
let rem=0
let prev=0
for(let i=0;i<arr.length;i++){


if(arr[i]>rem){
  prev=rem
  rem=arr[i]
}
}
console.log(rem,prev)
////

const a=[1,2,3,5,6,9]
const b=[2,3,4,5,6,23,44,55,44]

//remove duplicate from array
let c=[...a,...b]

let d=new Set(c)
console.log(d)
let duplicateno=[]
let obj={}
for(let i=0;i<c.length;i++){

  if(obj[c[i]]){
   duplicateno.push(c[i])
  }else{
    obj[c[i]]=c[i]
  }
}
console.log(obj,duplicateno)
let items=[]
for (let item in obj){
items.push(parseInt(item))
}
console.log(items)
//print duplicate  value also





///function to swap no
/*

function swap(arr,indx1,indx2){

let rem=arr[indx1]

arr[indx1] = arr[indx2]
arr[indx2]=rem
 console.log(arr[indx1],arr[indx2])
}
//swap(arr,1,5)


function swapWholeNo(){
  let start=0

  let end=arr.length-1
  while(start<end){
swap(arr,start,end)
start++
end--
  }
  console.log(arr)
}


swapWholeNo()


*/


/*

let obj={
    name:"Ankit",
    awe:function(){
        console.log(this.name)
    }
}
let sub={
    name:"tinng"
}
console.log(obj.awe.bind(sub)())




function use() {
    this.pk = "pp";
    this.name = "ii";

    const btn = document.querySelector('button');

    // Using an arrow function to preserve the context of 'this'
    this.handleClick = function() {
        console.log("Cc");
        console.log(this.pk);
    }

    btn.addEventListener("click", this.handleClick.bind(this));

    return this;
}

use();

*/
/*
function React() {
    this.library = "React";
    this.server = "https://localhost:300";

    // Requirement: Adding event listener to a button
    document
        .querySelector('button')
        .addEventListener('click', this.handleClick.bind(this));

    // Method to handle button click
    this.handleClick = function() {
        console.log("button clicked");
        console.log(this.server);
    };
}

const app = new React();

*/
/*
class binding{
    constructor(a,b){
    this.name=a
    this.age=b
    const btn=document.querySelector('button')
    .addEventListener("click",this.handleClick.bind(this))
    
    }
    
    handleClick(){
        console.log("clicked")
    console.log(this.age)
    }
    
    }
    
  const ama=new binding(2,3)
    */

/*
//console.log(use(1,2,3))
const a=use(33,44,33)
console.log(a)
const b=use(555,666,6665)
console.log(b,a)
//let context1=new use(1,2,3)
//console.log(context1)


*/


/*
let print3 = async()=>{
    return new Promise((resolve,reject)=>{ // This line executes 7th and add callback function to the mictotask queue.
    setTimeout(()=>{ // microtask queue content: console.log(2) and setTimeout(console.log("3"), 100)
    console.log("3"); // this line moved to the end of the macrotask,
    resolve();
    },200) // macrotask queue content: console.log("5") in 200ms console.log("3") in 100ms
    })
   
   }
   
   let print = async () => {
    console.log("1"); // This line executes 3rd and print 1
    setTimeout(() => { // This line executes 4th and add call back function inside macrotask queue.
    console.log("5"); // macrotask queue content: console.log("5")
    }, 100);
    return new Promise(async (resolve,reject)=>{ // This line executes 5th and add callback function to microtask queue.
    console.log("2"); // microtask queue content: console.log("2")
    print3(); // This line executes 6th and call print3 function
    resolve();
    console.log("4"); // this line executes 8th and print 4
    })
   };
   
   let start=async()=>{
   print(); // This line executes 2nd and call print function
    console.log("done") // this line executes 9th and print done
   };
   
   start(); // This line executes 1st and call start function
   */
  /*
   const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
  ];
  
  function printAnimals(i) {
    console.log(this)
      this.print = ()=> {
        console.log(this);
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
    }
  animals.map((item,index)=>{
    printAnimals.call(item,index)
  })

  const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements); //[a,b,0,1,2]

;
console.log(array)*/

/*

var objs = {name : "Aashi"};
function sayHello(){
  return "Hello " + this.name;
}

console.log(sayHello())*/}