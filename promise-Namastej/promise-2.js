console.log("hi")

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


function normalcall(){
 p.then(function(data){
      console.log(data)
    })
    console.log("in my case i will be called 1st")
}
normalcall()

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
async function toAwait(){
    try{
    const m1=await p
    console.log(m1)
    console.log("ddd")

    const m2=await p2
    console.log(m2)
    console.log("dddd")
    }catch(err){console.log(err)}
}
//or
toAwait().catch(function(){
    console.log()
})




