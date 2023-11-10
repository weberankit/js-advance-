console.log("hi i  am ankit")

//promise.all
/*
const p=new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve("hi1")
    },1000)
})

const p2=new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve("hi2")
    },2000)
})
//here rejecting
const p3=new Promise(function(resolve,reject){
    setTimeout(function(){
      reject("hi3")
    },3000)
})

Promise.all([p,p2,p3]).then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
    console.error(err)
    const errs = new Error("ffff")
    console.log(errs)
})
*/

///promise.allsettled
const p=new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve("hi1")
    },2000)
})

const p2=new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve("hi2")
    },4000)
})
//here rejecting
const p3=new Promise(function(resolve,reject){
    setTimeout(function(){
      reject("hi3")
    },3000)
})
/*
Promise.allSettled([p,p2,p3]).then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
    console.error(err)
    const errs = new Error("ffff")
    console.log(errs)
})
*/
///promise.race([])
/*
Promise.race([p,p2,p3]).then(function(data){
console.log(data)
}).catch(err=>console.error(err))

*/

//promise.any
/*
Promise.any([p,p2,p3]).then(function(data){
    console.log(data)
    }).catch(err=>console.error(err))
    
*/
//using inside async and await
    async function to(){
        const data=await Promise.allSettled([p,p2,p3])
     
       console.log(data)
    }
    to()
