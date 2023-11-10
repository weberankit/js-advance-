/*consuming promises
const promises=fetch("https://api.github.com/users/weberankit")
console.log(promises)
promises.then(function(data){
console.log(data)
return data
}).then(function(data){
    console.log(data)
})
*/ //--------------2-nd  example------------------------------------------------
///Rw promises created and conum example
/*
const cart=["linon","mako"]

//consuming promise
const promise=createorrder(cart)

promise.then(function(info){
    console.log(info)
    return info
}).then(function(info){
 return proceedtoPayment(info)   
}).then(function(info){
console.log(info)
})
.catch(function(error){
    console.log(error)
})
//creating promise

function createorrder(cart){


const pr=new Promise(function(resolve , reject){

if(!Validate(cart)){
    const err =  new Error("error ")
    reject(err)
}

//logic for crete order
const orderId = "3333"
if(orderId){
    resolve(orderId)
}


})

return pr

}
//here just vaidiationg card 
function Validate(){
    return true
}

function proceedtoPayment(){
    return new Promise(function (resolve , reject){
        resolve("item")
    })
}
*/


//must check all exaple all are uniques 
///3rd example
//ecomerce

makeOrder().then(function(dataId){
    console.log(dataId)
 return proceedtoPayment(dataId)
}).then(function(dataId){
return showOrdersummary(dataId)
}).then(function(dataId){
    return updateList(dataId)

}).catch(function(){
    console.log("below will execute at any case")
}).then(function(dataId){
    console.log(dataId)
}).catch(function(){
    console.log("there is error")
})

function makeOrder(){
    const promiseFirst = new Promise(function(resolve,reject){

        if(!orderInfo()){
            const error= new Error("this is ivalid")
            reject(error)
        }else{
            const id="this is new approach"
            resolve(id)
        }
       
     

    })
    return promiseFirst
}

function orderInfo(){
    return true
}
function proceedtoPayment(id){
    const item=new Promise(function(resolve,reject){
      if(!id){
        const err= new Error("huuu id is not provided")
        reject(err)
      }else{
        resolve(id+1+"2nd promise")
      }
    })
    return item
}


function showOrdersummary(idWithInfo){
    return new Promise(function(resolve,reject){
   if(!idWithInfo){
    reject(new Error("this is not valid"))
   }else{
    resolve(idWithInfo+"3rdpromise")
   }
    })
    
}


function updateList(idwith){
    return new Promise(function (resolve,reject){
        if(!idwith){
            reject(new Error("not vlid"))
        }else{
            resolve(idwith+"4th promise")
        }
    })
}