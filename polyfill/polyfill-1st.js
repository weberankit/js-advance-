//polyfill for map
/*
Array.prototype.myMap=function(calling){
    if( typeof calling !== 'function'){
    throw Error ("please provide function")
    }
   let arr=[]

    for(let i=0;i<this.length;i++){
      arr.push( calling(this[i],i,this))
      
    }
    return arr
}

let art=[2,3,4]
art.myMap((item,ink,aw)=>{
    console.log(item,ink,aw)
})
*/




//polyfill for filter
/* apply to all
basically inside calling ( we call function ex (item)=>{
    console.log(item)
    return item>4
} and inside it the item is basically = this[i]
    )
*/
/*
Array.prototype.myFilter=function (calling){
if(typeof calling !== "function"){
    throw Error("not passed function")
}
let arry=[]
for(let i=0;i<this.length;i++){
   if( calling(this[i])){
      arry.push(this[i])////here this is imp
   }
}

return arry
}

let no=[90,3,4]
let a= no.myFilter((item)=>{
    //console.log(item)
    return item>4
})
console.log(a)
*/
/*polyfill for reduce */

Array.prototype.myReduce=function(calling,init){
    let initial=init

    for(let i=0;i<this.length;i++){
      if(initial !== undefined){  
    //initial=calling.call(undefined,initial,this[i])
    initial=calling(initial,this[i] ,i,this)
}else{
    initial=this[0]
}

    }

return initial
}
let no=[90,3,4]
let b=no.myReduce((acc,curr)=>{
    acc=acc+curr
    return acc
})

/*
let a=no.reduce((acc,curr)=>{
    acc=acc+curr
    return acc
})*/
console.log(b)
//polyfill for  foreach
Array.prototype.MyForEach=function(calling){
    for(let i=0;i<this.length;i++){
        calling(this[i])
    }
}
const names = ["ali", "hamza", "jack"];
names.MyForEach((item)=>console.log(item))