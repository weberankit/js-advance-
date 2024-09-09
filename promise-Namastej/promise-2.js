console.log("hi")
//async alwyas return promise
/*
async function getData(){
    return "AMan"
}

getData().then(function (data){
    console.log(data)
})
*/


//2nd exampe-- differnce
/*
const p=new Promise(function(resolve ,reject){
   
   setTimeout(function(){
 resolve("hi i am promise")
   },4000)
   
})

//2nd line printed before excution
function normalcall(){
 p.then(function(data){
      console.log(data)
    })
    console.log("in my case i will be called 1st")
}
normalcall()
//2nd line is not going to be  printed before excution ---await
async function toget(){
    const promisedata= await p
    console.log("in my case i will not be called as used async and await")
    console.log(promisedata)
    
}
toget()


*/

//await =---detail

const p = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve("ddddd")
    },10000)
})
const p2 = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve("ddd")
    },5000)
})
//suspend function from callstack when encounter await ,after promise execute back to callstack, if again encounter await 
//then again suspend same thing repeat
async function toAwait(){
    try{
    const m1=await p
    console.log(m1)
    //console.log("ddd")

    const m2=await p2
    console.log(m2)
  //  console.log("dddd")
    }catch(err){console.log(err)}
}
//or
toAwait().catch(function(){
    console.log()
})

///very intersting and knowlege full
/**
 * 
 * 
 * In other words, await myPromise() is equivalent to myPromise().then(result => result). 
 * The await keyword takes care of extracting the value from the promise, so you don't need to use .
 * then explicitly.
 */
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



